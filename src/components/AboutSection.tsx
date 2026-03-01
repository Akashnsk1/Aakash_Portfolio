import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiAmazonwebservices,
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiGithubactions,
    SiLinux,
    SiPython,
    SiGooglecloud,
    SiGit,
    SiGrafana,
    SiPostgresql,
    SiJavascript,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { HiTerminal, HiServer, HiCloud, HiCog, HiChartBar } from 'react-icons/hi';

const skills = [
    {
        category: 'Programming Languages',
        icon: HiTerminal,
        items: [
            { name: 'Python', icon: SiPython, level: 85 },
            { name: 'JavaScript', icon: SiJavascript, level: 90 },
            { name: 'C/C++', icon: HiTerminal, level: 80 },
            { name: 'Java', icon: HiTerminal, level: 75 },
        ],
    },
    {
        category: 'Web Technologies',
        icon: HiServer,
        items: [
            { name: 'React', icon: SiReact, level: 85 },
            { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
            { name: 'HTML/CSS', icon: HiTerminal, level: 85 },
        ],
    },
    {
        category: 'Cloud & FinOps',
        icon: HiCloud,
        items: [
            { name: 'Google Cloud (GCP)', icon: SiGooglecloud, level: 75 },
            { name: 'Azure', icon: VscAzure, level: 70 },
            { name: 'AWS', icon: SiAmazonwebservices, level: 65 },
            { name: 'FinOps (FOCUS)', icon: HiChartBar, level: 80 },
        ],
    },
    {
        category: 'Tools & Platforms',
        icon: HiCog,
        items: [
            { name: 'Git', icon: SiGit, level: 85 },
            { name: 'GitHub Actions', icon: SiGithubactions, level: 80 },
            { name: 'Linux', icon: SiLinux, level: 90 },
            { name: 'SQL', icon: SiPostgresql, level: 80 },
        ],
    },
];

const experience = [
    {
        period: 'Oct 2024 — Present',
        role: 'Associate Software Engineer',
        company: 'Unisys',
        description: 'Working on enterprise-level cloud applications and platform engineering. Contributing to software development, cloud infrastructure automation, CI/CD, and delivering scalable solutions.',
        tags: ['Cloud Applications', 'Automation', 'Infrastructure Engineering'],
    },
    {
        period: 'Past Internship',
        role: 'Cloud, Applications & Infrastructure Intern',
        company: 'Unisys',
        description: 'Worked on cloud applications and infrastructure services. Gained hands-on experience in enterprise cloud environments and operations.',
        tags: ['Cloud Computing', 'Enterprise Settings', 'Operations'],
    },
];

function SkillBar({ name, icon: Icon, level, delay }: { name: string; icon: any; level: number; delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div ref={ref} className="group">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-primary-500 transition-colors" />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{name}</span>
                </div>
                <span className="text-xs font-mono text-neutral-400">{level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: delay * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
            </div>
        </div>
    );
}

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="relative" ref={ref}>
            <div>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="font-mono text-sm text-primary-500 tracking-wider">01 / ABOUT</span>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                        A bit <span className="text-gradient-warm">about me</span>
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl text-lg leading-relaxed">
                        I'm Akash — a cloud &amp; DevOps engineer who enjoys automating things and making infrastructure less painful. I like building stuff that works reliably at scale.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card rounded-2xl p-6 hover-lift"
                    >
                        <h3 className="font-heading font-semibold text-lg mb-4">Background</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                            CS graduate who fell in love with the terminal. I spend my time writing Terraform configs, debugging Kubernetes pods, and automating anything that can be automated. When I'm not in the cloud, I'm probably learning something new.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['AWS Certified', 'Docker', 'K8s', 'IaC', 'CI/CD', 'Monitoring'].map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <div className="space-y-6">
                        <h3 className="font-heading font-semibold text-lg">Experience</h3>
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 transition-colors duration-300"
                            >
                                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary-500" />
                                <span className="text-xs font-mono text-primary-500">{exp.period}</span>
                                <h4 className="font-heading font-semibold mt-1">{exp.role}</h4>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">{exp.company}</span>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="tag text-[10px]">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="space-y-6">
                        <h3 className="font-heading font-semibold text-lg">Skills</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {skills.map((category, ci) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + ci * 0.1 }}
                                    className="glass-card rounded-2xl p-5 hover-lift"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-8 h-8 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center">
                                            <category.icon className="w-4 h-4 text-primary-500" />
                                        </div>
                                        <h4 className="font-heading font-semibold text-sm">{category.category}</h4>
                                    </div>
                                    <div className="space-y-3.5">
                                        {category.items.map((skill, si) => (
                                            <SkillBar
                                                key={skill.name}
                                                name={skill.name}
                                                icon={skill.icon}
                                                level={skill.level}
                                                delay={ci * 2 + si}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
