import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCloud, HiCog, HiServer, HiShieldCheck, HiTerminal, HiChartBar } from 'react-icons/hi';

const things = [
    {
        icon: HiCog,
        title: 'Cloud Automation & Platform Engineering',
        description: 'Automating cloud operations using APIs, integrated scripts, and operational runbook development with strict role-based access.',
    },
    {
        icon: HiServer,
        title: 'Kubernetes Backup & Infrastructure Protection',
        description: 'Implementing backup/restore mechanisms for containers, contributing to cluster resiliency, and validating workload recovery.',
    },
    {
        icon: HiCloud,
        title: 'Cross-Cloud & Hybrid Infrastructure',
        description: 'Working across Azure, AWS, and VMware. Contributing to workload migration and hybrid disaster recovery planning.',
    },
    {
        icon: HiChartBar,
        title: 'Cloud Cost & FinOps Exposure',
        description: 'Managing cloud billing structures and structured data ingestion to improve visibility into cloud usage and expenditure.',
    },
    {
        icon: HiShieldCheck,
        title: 'Security & Analytics Reporting',
        description: 'Building security and operational dashboards using Power BI and Grafana for centralized data views and KPI visualization.',
    },
    {
        icon: HiTerminal,
        title: 'Full-Stack Development',
        description: 'Building interactive projects and web platforms using modern stacks like React, Node.js, and Tailwind CSS.',
    },
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="py-24 md:py-32 relative" ref={ref}>
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 xl:px-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-mono text-sm text-primary-500 tracking-wider">WHAT I DO</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
                        Things I <span className="text-gradient-warm">Love Doing</span>
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
                        Here's what I spend most of my time on — building, breaking, and automating things.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {things.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover-lift group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
