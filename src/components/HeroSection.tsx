import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import {
    SiAmazonwebservices,
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiGithubactions,
    SiLinux,
    SiPython,
    SiGooglecloud,
} from 'react-icons/si';
import { HiArrowRight } from 'react-icons/hi';

const techOrbit = [
    { icon: SiAmazonwebservices, label: 'AWS', color: '#FF9900' },
    { icon: SiDocker, label: 'Docker', color: '#2496ED' },
    { icon: SiKubernetes, label: 'K8s', color: '#326CE5' },
    { icon: SiTerraform, label: 'Terraform', color: '#844FBA' },
    { icon: SiGithubactions, label: 'CI/CD', color: '#2088FF' },
    { icon: SiLinux, label: 'Linux', color: '#FCC624' },
    { icon: SiPython, label: 'Python', color: '#3776AB' },
    { icon: SiGooglecloud, label: 'GCP', color: '#4285F4' },
];

const roles = ['Associate Software Engineer', 'Cloud & Platform Engineer', 'Infrastructure Automation', 'Full-Stack Developer'];

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 2000) {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return text;
}

const floatingSnippets = [
    { text: '$ terraform apply -auto-approve', x: '8%', y: '15%', delay: 0 },
    { text: '$ kubectl get pods', x: '75%', y: '20%', delay: 1.5 },
    { text: '$ docker compose up', x: '85%', y: '70%', delay: 3 },
];

export default function HeroSection() {
    const typedRole = useTypingEffect(roles);

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Dot grid background */}
            <div className="absolute inset-0 bg-dot-pattern bg-dot opacity-30 dark:opacity-15" />

            {/* Ambient glows - optimized */}
            <div className="absolute -top-20 right-[10%] w-[500px] h-[500px] bg-primary-500/[0.05] dark:bg-primary-500/[0.03] rounded-full blur-[180px] animate-float-slow will-change-transform" />
            <div className="absolute bottom-[5%] -left-20 w-[400px] h-[400px] bg-accent-500/[0.04] dark:bg-accent-500/[0.02] rounded-full blur-[150px] animate-float-delayed will-change-transform" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/[0.02] dark:bg-primary-400/[0.01] rounded-full blur-[200px]" />

            {/* Floating code snippets */}
            {floatingSnippets.map((snippet, i) => (
                <motion.span
                    key={i}
                    className="absolute font-mono text-[10px] text-neutral-300/50 dark:text-neutral-700/40 select-none pointer-events-none whitespace-nowrap hidden md:block will-change-transform"
                    style={{ left: snippet.x, top: snippet.y }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 0.5, 0], y: [10, -25, -50] }}
                    transition={{ delay: snippet.delay, duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                >
                    {snippet.text}
                </motion.span>
            ))}

            {/* Decorative lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 right-[20%] w-px h-[500px] bg-gradient-to-b from-transparent via-primary-500/10 to-transparent rotate-[20deg]" />
                <div className="absolute top-[30%] -left-10 w-px h-[400px] bg-gradient-to-b from-transparent via-accent-500/10 to-transparent -rotate-[15deg]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto section-padding pt-32 pb-20">

                {/* Main layout */}
                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">

                    {/* ═══ LEFT SIDE ═══ */}
                    <div className="flex-1 min-w-0 max-w-xl">

                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm mb-8"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-500" />
                            </span>
                            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                                Open to work · India
                            </span>
                        </motion.div>

                        {/* Name — large, semibold, the anchor of the page */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            <span className="block text-xl md:text-2xl font-heading text-neutral-600 dark:text-neutral-400 mb-2 font-medium">
                                Hii there, I am <span className="inline-block origin-[70%_70%] hover:animate-[wave_2.5s_infinite]">👋</span>
                            </span>
                            <h1 className="font-heading font-semibold leading-[0.95] tracking-tight text-neutral-900 dark:text-white">
                                <span className="block text-[clamp(2.8rem,11vw,8rem)] pt-2 md:pt-0">
                                    Akash
                                </span>
                            </h1>
                        </motion.div>

                        {/* Role — typing, sits right under the name */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="mt-3 flex items-center gap-0.5"
                        >
                            <span className="text-lg md:text-xl font-heading font-normal text-neutral-400 dark:text-neutral-500">
                                {typedRole}
                            </span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                                className="inline-block w-[2px] h-5 md:h-6 bg-primary-500 ml-0.5"
                            />
                        </motion.div>

                        {/* Description — conversational, not corporate */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-6 text-neutral-500 dark:text-neutral-400 leading-[1.75] max-w-md text-[14px] md:text-[15px]"
                        >
                            I build the systems behind the systems — cloud infrastructure,
                            CI/CD pipelines, and platforms designed to run themselves.
                            Clean architecture, zero surprises.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            className="mt-8 flex items-center gap-4 flex-wrap"
                        >
                            <a
                                href="/projects"
                                className="btn-primary text-sm"
                            >
                                View Work
                                <HiArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="/contact"
                                className="btn-outline text-sm"
                            >
                                Say Hello
                            </a>
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-sm border-primary-500/30 text-primary-600 dark:text-primary-400 hover:border-primary-500 transition-colors"
                            >
                                Resume
                            </a>
                        </motion.div>

                        {/* One-line stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 1.0 }}
                            className="mt-10 flex items-center gap-2 text-[11px] font-mono text-neutral-400 dark:text-neutral-500"
                        >
                            <span>Enterprise Cloud</span>
                            <span className="text-neutral-300 dark:text-neutral-700">·</span>
                            <span>Cross-Cloud Experience</span>
                            <span className="text-neutral-300 dark:text-neutral-700">·</span>
                            <span>Full-Stack Development</span>
                        </motion.div>
                    </div>

                    {/* ═══ RIGHT — Orbit ═══ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex-shrink-0 flex items-center justify-center lg:mr-8"
                    >
                        <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
                            <div className="absolute inset-0 rounded-full border border-neutral-200/40 dark:border-neutral-800/40" />
                            <div className="absolute -inset-4 rounded-full border border-dashed border-neutral-200/20 dark:border-neutral-800/20" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                                    className="w-40 h-40 md:w-52 md:h-52 rounded-full border border-dashed border-neutral-300/50 dark:border-neutral-700/50"
                                />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-500/20 blur-xl" />
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-2xl shadow-primary-500/30">
                                        <span className="text-2xl md:text-3xl">☁️</span>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                className="absolute inset-0 will-change-transform"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                            >
                                {techOrbit.slice(0, 4).map((tech, i) => {
                                    const angle = (i / techOrbit.length) * 360;
                                    const radius = typeof window !== 'undefined' && window.innerWidth >= 768 ? 155 : 120;
                                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                                    return (
                                        <motion.div
                                            key={tech.label}
                                            className="absolute top-1/2 left-1/2"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1, x: x - 18, y: y - 18 }}
                                            transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: 'backOut' }}
                                        >
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                                className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary-500/50 hover:scale-110 transition-all duration-300 cursor-default group"
                                                title={tech.label}
                                            >
                                                <tech.icon
                                                    className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110"
                                                    style={{ color: tech.color }}
                                                />
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            <motion.div
                                className="absolute inset-0 will-change-transform"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
                            >
                                {[0, 90].map((deg) => {
                                    const r = typeof window !== 'undefined' && window.innerWidth >= 768 ? 185 : 145;
                                    const dx = Math.cos((deg * Math.PI) / 180) * r;
                                    const dy = Math.sin((deg * Math.PI) / 180) * r;
                                    return (
                                        <div
                                            key={deg}
                                            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary-500/40"
                                            style={{ transform: `translate(${dx - 3}px, ${dy - 3}px)` }}
                                        />
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="hidden md:flex items-center gap-3 mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-start justify-center p-1.5"
                    >
                        <div className="w-1 h-1.5 rounded-full bg-primary-500" />
                    </motion.div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.2em]">scroll down</span>
                </motion.div>
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        </section>
    );
}
