import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';

export default function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section ref={ref} className="py-24 md:py-32 relative">
            <div className="max-w-[1400px] mx-auto section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.04] via-transparent to-accent-500/[0.04]" />
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/[0.08] rounded-full blur-[120px]" />

                    <div className="relative p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                                got a project?<br />
                                <span className="text-gradient-warm">let's talk.</span>
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400 mt-4 max-w-md">
                                I'm always up for interesting projects and new challenges. Drop me a message and let's figure something out.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="/contact" className="btn-primary group">
                                Say Hello
                                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/about" className="btn-outline">
                                About Me
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
