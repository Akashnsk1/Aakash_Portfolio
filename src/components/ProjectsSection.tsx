import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiCode, HiArrowNarrowRight } from 'react-icons/hi';
import {
    SiAmazonwebservices,
    SiDocker,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiGithubactions,
    SiVercel,
    SiKubernetes,
    SiGrafana,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { HiChartBar } from 'react-icons/hi';

const techIconMap: Record<string, any> = {
    AWS: SiAmazonwebservices,
    Docker: SiDocker,
    Python: SiPython,
    React: SiReact,
    'Tailwind CSS': SiTailwindcss,
    MongoDB: SiMongodb,
    'Express.js': SiExpress,
    'Node.js': SiNodedotjs,
    'GitHub Actions': SiGithubactions,
    Vercel: SiVercel,
    Kubernetes: SiKubernetes,
    Azure: VscAzure,
    Grafana: SiGrafana,
    'Power BI': HiChartBar,
};

const projects = [
    {
        id: 1,
        title: 'AI-Based Court Case Analysis System',
        subtitle: 'Intelligent Legal Document Analysis',
        description:
            'Developed an intelligent legal document analysis tool that simplifies case files and identifies violated IPC sections. Predicted case outcomes using historical data and integrated interactive chatbots. Implemented NLP for entity extraction, classification, precedent retrieval, and recommendation generation.',
        tech: ['Python', 'AWS', 'Docker', 'Machine Learning'],
        category: 'AI/ML & Cloud',
        featured: true,
        accent: '#844FBA',
        icon: '◆',
        link: '/projects/ai-court-case',
        github: '#',
    },
    {
        id: 2,
        title: 'Cloud Automation & Infrastructure',
        subtitle: 'DRaaS',
        description:
            'Automated cloud workflows using APIs, integrated scripts with cloud-native services. Implemented secure role-based access controls. Handled Kubernetes container backup/restore and cluster resiliency. Contributed to cross-cloud (Azure, AWS, VMware) disaster recovery planning and workload migrations.',
        tech: ['AWS', 'Azure', 'Kubernetes'],
        category: 'Cloud & DevOps',
        featured: true,
        accent: '#2088FF',
        icon: '▬',
        link: '/projects/cloud-automation',
        github: '#',
    },
    {
        id: 3,
        title: 'Security & Analytics Reporting',
        subtitle: 'Dashboarding',
        description:
            'Designed and developed security and operational analytics dashboards. Built structured, insight-driven reports to visualize key security metrics and organizational KPIs. Consolidated data from multiple sources into centralized analytical views for stakeholder visibility.',
        tech: ['Grafana', 'Power BI', 'Azure'],
        category: 'Data & Analytics',
        featured: false,
        accent: '#f09332',
        icon: '●',
        link: '/projects/security-analytics',
        github: '#',
    },
    {
        id: 4,
        title: 'Cloud Cost & FinOps Exposure',
        subtitle: 'FinOps',
        description:
            'Explored cloud billing structures and cost management strategies. Contributed to structured data ingestion for cost analysis and reporting. Assisted in improving visibility into cloud usage and expenditure.',
        tech: ['AWS', 'Azure'],
        category: 'Cloud & DevOps',
        featured: false,
        accent: '#22c53e',
        icon: '▲',
        link: '/projects/cloud-cost',
        github: '#',
    },
    {
        id: 5,
        title: 'PG LIFE',
        subtitle: 'Accommodations Platform',
        description:
            'Built an online platform for finding PG accommodations in major cities. Implemented secure authentication and built the backend API using MongoDB, Mongoose, and Express.js. Features include city-based search algorithms.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        category: 'Web Development',
        featured: false,
        accent: '#4285F4',
        icon: '◇',
        link: '/projects/pg-life',
        github: '#',
    },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

/* ── Featured Project Card (large) ── */
function FeaturedCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative"
        >
            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-300/70 dark:hover:border-neutral-700/70 transition-all duration-500`}>
                {/* Visual area — abstract pattern */}
                <div className="relative md:w-[45%] min-h-[220px] md:min-h-[340px] overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 30% 40%, ${project.accent} 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${project.accent} 0%, transparent 50%)`,
                        }}
                    />
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                    {/* Large project number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span
                            className="font-heading font-bold text-[8rem] md:text-[10rem] leading-none select-none opacity-[0.04] dark:opacity-[0.03]"
                            style={{ color: project.accent }}
                        >
                            {String(project.id).padStart(2, '0')}
                        </span>
                    </div>
                    {/* Floating icon */}
                    <motion.div
                        className="absolute top-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold"
                        style={{ backgroundColor: project.accent }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        {project.icon}
                    </motion.div>
                    {/* Featured badge */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase text-white/90" style={{ backgroundColor: `${project.accent}cc` }}>
                            Featured
                        </span>
                    </div>
                    {/* Decorative line */}
                    <div
                        className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 bottom-0 w-px hidden md:block`}
                        style={{ background: `linear-gradient(to bottom, transparent, ${project.accent}33, transparent)` }}
                    />
                </div>

                {/* Content area */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.accent }}>
                            {project.category}
                        </span>
                        <span className="w-8 h-px" style={{ backgroundColor: project.accent }} />
                    </div>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <span className="text-sm text-neutral-400 dark:text-neutral-500 font-mono mb-5">
                        {project.subtitle}
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-[1.8] text-[14px] mb-8 max-w-lg">
                        {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => {
                            const Icon = techIconMap[tech];
                            return (
                                <div
                                    key={tech}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/80 text-xs font-mono text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50"
                                >
                                    {Icon && <Icon className="w-3.5 h-3.5" />}
                                    {tech}
                                </div>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <a
                            href={project.link}
                            className="inline-flex items-center gap-2 text-sm font-medium group/link"
                            style={{ color: project.accent }}
                        >
                            View Project
                            <HiArrowNarrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={project.github}
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                        >
                            <HiCode className="w-4 h-4" />
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ── Regular Project Card ── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            <div className="h-full rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-300/70 dark:hover:border-neutral-700/70 transition-all duration-500 flex flex-col">
                {/* Top accent bar */}
                <div className="h-1 w-full relative overflow-hidden">
                    <motion.div
                        className="h-full"
                        style={{ backgroundColor: project.accent }}
                        initial={{ width: '0%' }}
                        animate={{ width: isHovered ? '100%' : '30%' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                </div>

                <div className="p-7 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-3">
                            <span
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
                                style={{ backgroundColor: project.accent }}
                            >
                                {project.icon}
                            </span>
                            <div>
                                <span className="font-mono text-[10px] tracking-widest uppercase block" style={{ color: project.accent }}>
                                    {project.category}
                                </span>
                                <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
                                    #{String(project.id).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-1.5">
                            <a
                                href={project.github}
                                className="w-8 h-8 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-transparent transition-all duration-300"
                                style={{ ['--hover-bg' as any]: project.accent }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = project.accent)}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                aria-label="View code"
                            >
                                <HiCode className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href={project.link}
                                className="w-8 h-8 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-transparent transition-all duration-300"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = project.accent)}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                aria-label="View live"
                            >
                                <HiExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Title + Subtitle */}
                    <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono mb-4">
                        {project.subtitle}
                    </span>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 leading-[1.75] text-[13px] flex-1 mb-6">
                        {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => {
                            const Icon = techIconMap[tech];
                            return (
                                <div
                                    key={tech}
                                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-100/80 dark:bg-neutral-800/60 text-[11px] font-mono text-neutral-500 dark:text-neutral-400"
                                >
                                    {Icon && <Icon className="w-3 h-3" />}
                                    {tech}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState('All');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const featured = filteredProjects.filter((p) => p.featured);
    const regular = filteredProjects.filter((p) => !p.featured);

    return (
        <section className="py-24 md:py-32 relative" ref={ref}>
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24 xl:px-32">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <span className="font-mono text-sm text-primary-500 tracking-wider">02 / PROJECTS</span>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
                                Things I've <span className="text-gradient-warm">built</span>
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl text-[15px] leading-relaxed">
                                From infra automation to monitoring stacks — projects that started as "let me just try this" and turned into real systems.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-neutral-400 dark:text-neutral-500 font-mono">
                            <span className="w-2 h-2 rounded-full bg-primary-500" />
                            {projects.length} projects
                        </div>
                    </div>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-14"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/20'
                                : 'bg-transparent border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-primary-500/50 hover:text-primary-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Featured Projects — large alternating cards */}
                <AnimatePresence mode="wait">
                    {featured.length > 0 && (
                        <div className="space-y-8 mb-12">
                            {featured.map((project, i) => (
                                <FeaturedCard key={project.id} project={project} index={i} />
                            ))}
                        </div>
                    )}
                </AnimatePresence>

                {/* Divider between featured and regular */}
                {featured.length > 0 && regular.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="h-px flex-1 bg-gradient-to-r from-neutral-200/0 via-neutral-200 to-neutral-200/0 dark:from-neutral-800/0 dark:via-neutral-800 dark:to-neutral-800/0" />
                        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">More Work</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-neutral-200/0 via-neutral-200 to-neutral-200/0 dark:from-neutral-800/0 dark:via-neutral-800 dark:to-neutral-800/0" />
                    </motion.div>
                )}

                {/* Regular Projects — 2-col grid */}
                <AnimatePresence mode="wait">
                    {regular.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {regular.map((project, i) => (
                                <ProjectCard key={project.id} project={project} index={i} />
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
