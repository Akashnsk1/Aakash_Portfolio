import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const socials = [
    { icon: SiGithub, label: 'GitHub', href: 'https://github.com/akashnsk9845', username: '/akashnsk9845' },
    { icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/akash-n-s-k', username: '/in/akash-n-s-k' },
    { icon: SiX, label: 'X (Twitter)', href: 'https://x.com', username: '@akashnsk9845' },
];

const faqs = [
    { q: 'What services do you offer?', a: 'Cloud architecture, CI/CD pipelines, containerization (Docker/K8s), infrastructure automation, and backend development.' },
    { q: 'What\'s your typical response time?', a: 'I usually respond within 24 hours to all business inquiries.' },
    { q: 'Are you available for freelance projects?', a: 'Yes! I am currently open for selective freelance and consulting opportunities.' },
];

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
                <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

                    {/* Left Column: Text & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-2 flex flex-col justify-between"
                    >
                        <div>
                            <span className="font-mono text-sm text-primary-500 tracking-wider uppercase mb-5 block">
                                03 / Contact
                            </span>
                            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                                Let's build<br />
                                <span className="text-gradient-warm">together.</span>
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed mb-12 max-w-md">
                                Whether you're a startup needing scalable infrastructure or an enterprise optimizing cloud costs, I'm ready to help you engineer the future.
                            </p>

                            {/* Direct Contact List */}
                            <div className="space-y-8 mb-16">
                                <div className="flex gap-5 items-start group">
                                    <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-primary-500 bg-white/50 dark:bg-neutral-900/50 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300">
                                        <HiMail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1.5">Email</p>
                                        <a href="mailto:akashnsk9845@gmail.com" className="font-heading text-lg md:text-xl font-semibold hover:text-primary-500 transition-colors">akashnsk9845@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start group">
                                    <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-accent-500 bg-white/50 dark:bg-neutral-900/50 group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500 transition-all duration-300">
                                        <HiLocationMarker className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1.5">Location</p>
                                        <p className="font-heading text-lg md:text-xl font-semibold">India 🇮🇳</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start group">
                                    <div className="w-12 h-12 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-green-500 bg-white/50 dark:bg-neutral-900/50 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 group-hover:bg-white" />
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 group-hover:bg-white" />
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1.5">Status</p>
                                        <p className="font-heading text-lg md:text-xl font-semibold text-green-600 dark:text-green-500">Open to work</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Minimum */}
                        <div>
                            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-5">Connect</p>
                            <div className="flex flex-wrap gap-4">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-500 transition-all duration-300 group text-sm font-medium"
                                    >
                                        <social.icon className="w-4 h-4" />
                                        <span>{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:col-span-3 mt-12 lg:mt-0"
                    >
                        <div className="relative rounded-[32px] overflow-hidden p-[1px] bg-gradient-to-b from-neutral-200 to-transparent dark:from-neutral-800 dark:to-transparent">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-50" />
                            <div className="relative bg-white/80 dark:bg-[#0c0c0c]/80 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 lg:px-14 lg:py-16 h-full">
                                <form action="https://formsubmit.co/akashnsk9845@gmail.com" method="POST" className="flex flex-col h-full space-y-10">
                                    {/* FormSubmit Configuration */}
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_subject" value="New Portfolio Submission!" />

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="relative group">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-base text-neutral-900 dark:text-neutral-100 placeholder-transparent focus:outline-none focus:border-primary-500 focus:dark:border-primary-500 peer transition-colors"
                                                placeholder="Name"
                                            />
                                            <label htmlFor="name" className="absolute left-0 -top-5 text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-sans peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-[11px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary-500 cursor-text">
                                                What's your name?
                                            </label>
                                        </div>
                                        <div className="relative group">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-base text-neutral-900 dark:text-neutral-100 placeholder-transparent focus:outline-none focus:border-primary-500 focus:dark:border-primary-500 peer transition-colors"
                                                placeholder="Email"
                                            />
                                            <label htmlFor="email" className="absolute left-0 -top-5 text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-sans peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-[11px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary-500 cursor-text">
                                                Your email address
                                            </label>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-base text-neutral-900 dark:text-neutral-100 placeholder-transparent focus:outline-none focus:border-primary-500 focus:dark:border-primary-500 peer transition-colors"
                                            placeholder="Subject"
                                        />
                                        <label htmlFor="subject" className="absolute left-0 -top-5 text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-sans peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-[11px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary-500 cursor-text">
                                            What is this regarding?
                                        </label>
                                    </div>

                                    <div className="relative group flex-1 pb-4">
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-base text-neutral-900 dark:text-neutral-100 placeholder-transparent focus:outline-none focus:border-primary-500 focus:dark:border-primary-500 peer resize-none transition-colors h-full min-h-[120px]"
                                            placeholder="Message"
                                        />
                                        <label htmlFor="message" className="absolute left-0 -top-5 text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-sans peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-[11px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-primary-500 cursor-text">
                                            Tell me about your project...
                                        </label>
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="group relative inline-flex items-center gap-4 w-full md:w-auto overflow-hidden rounded-full bg-neutral-900 dark:bg-white px-8 py-4 text-sm font-semibold text-white dark:text-neutral-900 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <span className="relative z-10 w-full text-center">Send Transmission</span>
                                            <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 dark:bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
                                                <HiArrowRight className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
