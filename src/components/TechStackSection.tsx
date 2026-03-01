import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiAmazonwebservices, SiDocker, SiKubernetes, SiTerraform,
    SiGithubactions, SiLinux, SiPython, SiJenkins,
    SiGooglecloud, SiNginx, SiGit, SiGrafana,
    SiPrometheus, SiAnsible, SiPostgresql, SiRedis,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const row1 = [
    { icon: SiAmazonwebservices, label: 'AWS', color: '#FF9900' },
    { icon: SiDocker, label: 'Docker', color: '#2496ED' },
    { icon: SiKubernetes, label: 'Kubernetes', color: '#326CE5' },
    { icon: SiTerraform, label: 'Terraform', color: '#844FBA' },
    { icon: SiGithubactions, label: 'GitHub Actions', color: '#2088FF' },
    { icon: SiLinux, label: 'Linux', color: '#FCC624' },
    { icon: SiPython, label: 'Python', color: '#3776AB' },
    { icon: SiGooglecloud, label: 'GCP', color: '#4285F4' },
    { icon: VscAzure, label: 'Azure', color: '#0078D4' },
];

const row2 = [
    { icon: SiJenkins, label: 'Jenkins', color: '#D24939' },
    { icon: SiNginx, label: 'Nginx', color: '#009639' },
    { icon: SiGit, label: 'Git', color: '#F05032' },
    { icon: SiGrafana, label: 'Grafana', color: '#F46800' },
    { icon: SiPrometheus, label: 'Prometheus', color: '#E6522C' },
    { icon: SiAnsible, label: 'Ansible', color: '#EE0000' },
    { icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
    { icon: SiRedis, label: 'Redis', color: '#DC382D' },
];

function TechPill({ icon: Icon, label, color }: { icon: any; label: string; color: string }) {
    return (
        <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-500/50 transition-colors duration-300 group cursor-default">
            <Icon className="w-5 h-5 transition-colors duration-300" style={{ color }} />
            <span className="font-mono text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}

export default function TechStackSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto section-padding mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <span className="font-mono text-xs text-primary-500 tracking-widest uppercase">
                            Tech Stack
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
                            tools i <span className="text-gradient-warm">use</span>
                        </h2>
                    </div>
                    <p className="font-mono text-xs text-neutral-400 max-w-xs">
                        the stuff that keeps my terminal busy
                    </p>
                </motion.div>
            </div>

            {/* Marquee Row 1 — left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden mb-3 marquee-wrapper"
            >
                {/* Edge fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none" />

                <div className="marquee-track marquee-scroll">
                    {[...row1, ...row1].map((tech, i) => (
                        <TechPill key={`${tech.label}-${i}`} {...tech} />
                    ))}
                </div>
            </motion.div>

            {/* Marquee Row 2 — right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative overflow-hidden marquee-wrapper"
            >
                {/* Edge fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none" />

                <div className="marquee-track marquee-scroll-reverse">
                    {[...row2, ...row2].map((tech, i) => (
                        <TechPill key={`${tech.label}-${i}`} {...tech} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
