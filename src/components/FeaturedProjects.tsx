import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight, HiExternalLink, HiCode } from 'react-icons/hi';
import {
    SiAmazonwebservices,
    SiDocker,
    SiKubernetes,
    SiGithubactions,
    SiGrafana,
    SiPython,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiExpress
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const techMap: Record<string, any> = {
    AWS: SiAmazonwebservices,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    Azure: VscAzure,
    'GitHub Actions': SiGithubactions,
    Grafana: SiGrafana,
    Python: SiPython,
    React: SiReact,
    'Node.js': SiNodedotjs,
    MongoDB: SiMongodb,
    'Express.js': SiExpress
};

const projects = [
    {
        title: 'Cloud Automation & Infrastructure',
        description: 'Automated cloud workflows using APIs, integrated scripts with cloud-native services. Implemented secure role-based access controls.',
        tech: ['AWS', 'Azure', 'Kubernetes'],
        link: '/projects/cloud-automation',
    },
    {
        title: 'AI-Based Court Case Analysis System',
        description: 'Developed an intelligent legal document analysis tool that simplifies case files and identifies violated IPC sections.',
        tech: ['Python', 'AWS', 'Docker'],
        link: '/projects/ai-court-case'
    },
    {
        title: 'PG LIFE',
        description: 'Built an online platform for finding PG accommodations in major cities with secure authentication.',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: '/projects/pg-life'
    },
];

export default function FeaturedProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="py-24 md:py-32 relative">
            <div className="max-w-[1400px] mx-auto section-padding">
                {/* Header — asymmetric */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="font-mono text-xs text-primary-500 tracking-widest uppercase">
                            Selected Work
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold mt-3 leading-tight">
                            stuff i've<br />
                            <span className="text-gradient-warm">built</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <a
                            href="/projects"
                            className="group inline-flex items-center gap-2 font-mono text-sm text-neutral-500 hover:text-primary-500 transition-colors"
                        >
                            view all projects
                            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {/* Large card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bento-card md:row-span-2 p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[440px] group relative"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/[0.06] dark:bg-primary-500/[0.04] rounded-full blur-[80px] group-hover:w-60 group-hover:h-60 transition-all duration-700" />
                        <div className="relative">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-mono text-xs text-primary-500">01</span>
                                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                                <div className="flex gap-1.5">
                                    <a href="#" className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-primary-500 hover:border-primary-500 transition-colors">
                                        <HiCode className="w-3.5 h-3.5" />
                                    </a>
                                    <a href={projects[0].link} className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-primary-500 hover:border-primary-500 transition-colors">
                                        <HiExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                            <h3 className="font-heading text-2xl md:text-3xl font-bold group-hover:text-primary-500 transition-colors duration-300">
                                {projects[0].title}
                            </h3>
                            <p className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-sm leading-relaxed">
                                {projects[0].description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6 relative">
                            {projects[0].tech.map((t) => {
                                const Icon = techMap[t];
                                return (
                                    <div key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-xs font-mono">
                                        {Icon && <Icon className="w-3 h-3" />}
                                        {t}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Medium cards */}
                    {projects.slice(1).map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                            className="bento-card p-7 md:p-8 flex flex-col justify-between min-h-[200px] group relative"
                        >
                            <div className={`absolute bottom-0 left-0 w-32 h-32 ${i === 0 ? 'bg-accent-500/[0.06]' : 'bg-primary-500/[0.06]'} rounded-full blur-[60px] group-hover:w-48 group-hover:h-48 transition-all duration-700`} />
                            <div className="relative">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-mono text-xs text-primary-500">0{i + 2}</span>
                                    <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                                    <div className="flex gap-1.5">
                                        <a href={project.link} className="w-7 h-7 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-primary-500 hover:border-primary-500 transition-colors">
                                            <HiExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="font-heading text-xl font-bold group-hover:text-primary-500 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 relative">
                                {project.tech.map((t) => {
                                    const Icon = techMap[t];
                                    return (
                                        <div key={t} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-xs font-mono">
                                            {Icon && <Icon className="w-3 h-3" />}
                                            {t}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
