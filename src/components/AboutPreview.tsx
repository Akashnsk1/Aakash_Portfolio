import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import profileImg from '../assets/profile.webp';

export default function AboutPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
            <div className="mx-auto max-w-[1400px] section-padding">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left — Photo Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative max-w-md mx-auto lg:mx-0"
                    >
                        <div className="relative rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white dark:bg-neutral-900 p-3 shadow-xl shadow-black/[0.03] dark:shadow-black/20 group">
                            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                                <img
                                    src={profileImg.src}
                                    alt="Akash"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="font-heading font-semibold text-lg text-white">Akash</h3>
                                    <p className="font-mono text-[11px] text-white/60 tracking-wide">Associate Software Engineer</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-1 pt-3 pb-1">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                                    </span>
                                    <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">Available for work</span>
                                </div>
                                <span className="text-[11px] font-mono text-neutral-300 dark:text-neutral-700">India</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary-500/15 -z-10 hidden lg:block" />
                        <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border border-primary-500/[0.07] -z-20 hidden lg:block" />
                    </motion.div>

                    {/* Right — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="font-mono text-xs text-primary-500 tracking-widest uppercase">
                            About Me
                        </span>

                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-[1.1]">
                            A software engineer who{' '}
                            <span className="text-gradient-warm">loves building</span>{' '}
                            platforms
                        </h2>

                        <p className="mt-6 text-neutral-500 dark:text-neutral-400 leading-[1.8] text-[15px]">
                            I'm Akash — I specialize in cloud automation, full-stack development, and creating
                            systems that run themselves. With hands-on experience across multiple cloud
                            environments, I focus on building infrastructure that is reliable, secure, and scalable.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {['React', 'Automation', 'Multi-Cloud', 'Python', 'CI/CD', 'Linux'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/40"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <a href="/about" className="btn-primary text-sm">
                                More About Me
                                <HiArrowRight className="w-4 h-4" />
                            </a>
                            <div className="flex items-center gap-3 text-[13px] text-neutral-400">
                                <div className="flex items-center gap-1.5">
                                    <span className="font-heading font-semibold text-lg text-neutral-800 dark:text-neutral-100">Multi</span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider">Cloud</span>
                                </div>
                                <span className="w-px h-4 bg-neutral-200 dark:bg-neutral-800" />
                                <div className="flex items-center gap-1.5">
                                    <span className="font-heading font-semibold text-lg text-neutral-800 dark:text-neutral-100">Full</span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider">Stack</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
