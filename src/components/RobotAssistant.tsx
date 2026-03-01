import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Map of route patterns to audio file paths
const AUDIO_MAP: Record<string, string> = {
    "/": "/audio/Home-voice.mp3",
    "/about": "/audio/About-voice.mp3",
    "/projects": "/audio/project-voice.mp3",
    "/contact": "/audio/contact-voice.mpeg",
};

function getAudioFileForPath(pathname: string): string | null {
    // Exact cleanup of pathname (e.g. trailing slashes)
    const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

    if (normalized === "/" || normalized === "/index.html") return AUDIO_MAP["/"];
    if (normalized === "/about") return AUDIO_MAP["/about"];
    if (normalized === "/projects") return AUDIO_MAP["/projects"];
    if (normalized === "/contact") return AUDIO_MAP["/contact"];

    return null;
}

function getSessionKey(pathname: string): string {
    const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    return `played_voice_${normalized}`;
}

export default function RobotAssistant() {
    const [path, setPath] = useState("");
    const [text, setText] = useState("");
    const [hasInteracted, setHasInteracted] = useState(false);
    const [showText, setShowText] = useState(true);
    const [isAudioLoading, setIsAudioLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const preloadedAudioRef = useRef<Map<string, HTMLAudioElement>>(new Map());
    const playTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Preload all audio files once on mount
    useEffect(() => {
        const map = preloadedAudioRef.current;
        for (const [, src] of Object.entries(AUDIO_MAP)) {
            if (!map.has(src)) {
                const audio = new Audio();
                audio.preload = "auto";
                audio.src = src;
                audio.load(); // Start fetching immediately
                map.set(src, audio);
            }
        }

        return () => {
            // Cleanup all preloaded audio on unmount
            for (const [, audio] of map) {
                audio.pause();
                audio.removeAttribute("src");
                audio.load();
            }
            map.clear();
        };
    }, []);

    // Stop any currently playing audio
    const stopCurrentAudio = useCallback(() => {
        if (playTimeoutRef.current) {
            clearTimeout(playTimeoutRef.current);
            playTimeoutRef.current = null;
        }
        setIsAudioLoading(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
    }, []);

    // Play audio for a given path, with optional force (bypasses session check)
    const playAudioForPath = useCallback(
        async (currentPath: string, force = false) => {
            const audioFile = getAudioFileForPath(currentPath);
            if (!audioFile) return;

            const sessionKey = getSessionKey(currentPath);
            if (!force && window.sessionStorage.getItem(sessionKey)) return;

            // Stop whatever is currently playing
            stopCurrentAudio();

            // Use the preloaded audio element
            const audio = preloadedAudioRef.current.get(audioFile);
            if (!audio) return;

            audio.currentTime = 0;
            audio.volume = 1.0;
            audioRef.current = audio;

            setIsAudioLoading(true);
            try {
                await audio.play();
                window.sessionStorage.setItem(sessionKey, "true");
                setIsAudioLoading(false);
            } catch (err) {
                setIsAudioLoading(false);
                console.log("Audio autoplay prevented or interrupted, awaiting user interaction.");
            }
        },
        [stopCurrentAudio],
    );

    // Initialize state and manage audio across View Transitions
    useEffect(() => {
        setPath(window.location.pathname);

        const handlePageLoad = () => {
            setPath(window.location.pathname);
            setShowText(true);
        };

        // Stop audio when a View Transition navigation starts
        const handleBeforePreparation = () => {
            stopCurrentAudio();
        };

        const handleInteraction = () => {
            setHasInteracted(true);
        };

        document.addEventListener("astro:page-load", handlePageLoad);
        document.addEventListener("astro:before-preparation", handleBeforePreparation);
        document.addEventListener("click", handleInteraction);
        document.addEventListener("keydown", handleInteraction);

        return () => {
            document.removeEventListener("astro:page-load", handlePageLoad);
            document.removeEventListener("astro:before-preparation", handleBeforePreparation);
            document.removeEventListener("click", handleInteraction);
            document.removeEventListener("keydown", handleInteraction);
            stopCurrentAudio();
        };
    }, [stopCurrentAudio]);

    // When the path or interaction state changes, try to play audio
    useEffect(() => {
        if (!path) return;

        const currentPath = path;
        const sessionKey = getSessionKey(currentPath);
        const hasPlayedThisPath = window.sessionStorage.getItem(sessionKey);

        // Check if the user has interacted on any page this session
        const checkAnyInteraction = () => {
            return Object.keys(AUDIO_MAP).some((route) =>
                window.sessionStorage.getItem(getSessionKey(route)),
            ) || hasInteracted;
        };

        if (checkAnyInteraction()) {
            setHasInteracted(true);
        }

        // Auto-play slightly delayed to wait for the loading screen/transition
        const timeoutId = setTimeout(() => {
            // Only attempt auto-play if the user has interacted with the document
            // otherwise the browser will block it anyway.
            if (hasInteracted && !hasPlayedThisPath) {
                // Not forcing so it respects the built-in storage block from playAudioForPath if already set 
                playAudioForPath(currentPath, false);
            }
        }, 1200);

        return () => clearTimeout(timeoutId);
    }, [path, hasInteracted, playAudioForPath]);

    useEffect(() => {
        const p = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
        let routeText = "";

        if (p === "/" || p === "/index.html") {
            routeText = "System online. Welcome to the workspace of Akash... All Environments are stable.";
        } else if (p === "/about") {
            routeText = "Accessing encrypted records. Identity verified: Akash. Architecting scalable infrastructure.";
        } else if (p === "/projects") {
            routeText = "Deploying infrastructure schematics. Scanning past and active deployments.";
        } else if (p.startsWith("/projects/")) {
            routeText = "Analyzing detailed project schematics and operational data.";
        } else if (p === "/contact") {
            routeText = "Establishing secure transmission lines. Ready for incoming communication.";
        }

        const sessionKey = `played_voice_${p}`;
        const hasPlayedThisPath = window.sessionStorage.getItem(sessionKey);

        if (!hasInteracted && !hasPlayedThisPath) {
            if (p === "/" || p === "/index.html") {
                setText("Click anywhere to feel the audio experience 🎧");
            } else {
                setText("Click anywhere to unlock audio transmission...");
            }
        } else {
            setText(routeText);
            // Hide text bubble after 8 seconds
            const timer = setTimeout(() => {
                setShowText(false);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [hasInteracted, path]);

    if (!path) return null;

    const isHome = path === "/" || path === "/index.html";

    return (
        <div
            className="fixed z-[9999] pointer-events-none flex bottom-4 right-4 md:bottom-8 md:right-8 flex-col items-end gap-3 md:gap-5"
        >
            <AnimatePresence>
                {text && showText && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)", scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="bg-neutral-900/90 backdrop-blur-xl border border-primary-500/20 text-neutral-300 px-3 py-2.5 md:px-6 md:py-4 rounded-xl md:rounded-3xl text-[10.5px] md:text-sm max-w-[190px] md:max-w-[320px] text-right shadow-[0_0_30px_rgba(109,40,217,0.3)] pointer-events-auto leading-snug md:leading-relaxed relative overflow-hidden origin-bottom-right"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 pointer-events-none" />
                        <span className="relative z-10">{text}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center pointer-events-auto cursor-pointer"
                onClick={() => {
                    setHasInteracted(true);
                    setShowText(true);
                    playAudioForPath(path, true);
                }}
            >
                {/* Crazy Robot Assistant Drone */}
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-2xl animate-pulse" />

                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.svg
                        viewBox="0 0 100 100"
                        className="w-full h-full drop-shadow-[0_0_10px_rgba(109,40,217,0.8)]"
                        animate={{ rotate: hasInteracted ? [0, 5, -5, 0] : 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            <linearGradient id="droneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1a1a2e" />
                                <stop offset="100%" stopColor="#16213e" />
                            </linearGradient>
                        </defs>

                        {/* Hexagonal High-Tech Drone Frame */}
                        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="url(#droneGrad)" stroke="#6d28d9" strokeWidth="4" />
                        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="#0ea5e9" strokeWidth="2" opacity="0.6" />

                        {/* Core Eye Element */}
                        <circle cx="50" cy="50" r="14" fill="#0f0f0f" stroke="#ec4899" strokeWidth="3" />
                        <motion.circle
                            cx="50" cy="50" r="7" fill="#ec4899" filter="url(#glow)"
                            animate={{
                                scale: showText ? [1, 1.4, 1] : [1, 1.1, 1],
                                opacity: isAudioLoading ? [0.2, 1, 0.2] : 1
                            }}
                            transition={{
                                duration: isAudioLoading ? 0.2 : (showText ? 0.8 : 2),
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Antennae Core / Receiver */}
                        <line x1="50" y1="5" x2="50" y2="-5" stroke="#6d28d9" strokeWidth="4" className="overflow-visible" />
                        <motion.circle cx="50" cy="-5" r="4" fill="#0ea5e9" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />

                        {/* Tech Panel Accents */}
                        <path d="M 30 35 L 45 45 M 70 35 L 55 45 M 30 65 L 45 55 M 70 65 L 55 55" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
                    </motion.svg>
                </div>

                {/* Rotating holographic rings */}
                <div className="absolute w-[130%] h-[130%] border-[2px] border-primary-500/40 rounded-full animate-[spin_5s_linear_infinite] border-t-transparent border-l-transparent" />
                <div className="absolute w-[150%] h-[150%] border border-secondary-400/30 rounded-full animate-[spin_3s_linear_infinite_reverse] border-b-transparent border-r-transparent" />
                <div className="absolute w-[170%] h-[170%] border-[2px] border-dashed border-primary-400/20 rounded-full animate-[spin_7s_linear_infinite]" />
            </motion.div>
        </div>
    );
}
