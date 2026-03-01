import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Handle initial load (shorter time)
        const initialTimer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        let fallbackTimer: ReturnType<typeof setTimeout>;

        // Handle Astro View Transitions
        const handleStart = () => {
            setIsLoading(true);
            // Failsafe: if navigation is aborted or takes too long, hide it anyway
            clearTimeout(fallbackTimer);
            fallbackTimer = setTimeout(() => setIsLoading(false), 2000);
        };

        const handleEnd = () => {
            clearTimeout(fallbackTimer);
            // Hide immediately after page components are swapped
            setIsLoading(false);
        };

        document.addEventListener("astro:before-preparation", handleStart);
        document.addEventListener("astro:page-load", handleEnd);

        return () => {
            clearTimeout(initialTimer);
            clearTimeout(fallbackTimer);
            document.removeEventListener("astro:before-preparation", handleStart);
            document.removeEventListener("astro:page-load", handleEnd);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="fixed inset-0 z-[100000] bg-surface-light dark:bg-surface-dark flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
                >
                    {/* Background ambient glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative flex flex-col items-center z-10">
                        {/* Futuristic Logo Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-primary-500/40 relative"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-white/50 border-r-white/50 border-b-white/50"
                            />
                            <span className="font-heading font-black text-white text-3xl tracking-tighter">
                                a.
                            </span>
                        </motion.div>

                        {/* Text */}
                        <div className="overflow-hidden h-6 mb-2">
                            <motion.h2
                                initial={{ y: 24 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="font-heading font-bold text-lg tracking-widest uppercase text-neutral-800 dark:text-neutral-200"
                            >
                                Initializing Space
                            </motion.h2>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-48 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mt-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.8, ease: 'easeInOut' }}
                                className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                            />
                        </div>

                        {/* Blinking Subtext */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="font-mono text-[10px] text-neutral-400 mt-4 uppercase tracking-[0.3em]"
                        >
                            Fetching modules...
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
