import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const words = [
  'Cloud Architecture',
  '✦',
  'CI/CD Pipelines',
  '✦',
  'Kubernetes',
  '✦',
  'Terraform',
  '✦',
  'Docker',
  '✦',
  'Monitoring',
  '✦',
  'AWS',
  '✦',
  'Infrastructure as Code',
  '✦',
  'Automation',
  '✦',
  'Linux',
  '✦',
];

export default function MarqueeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Duplicate items for seamless loop
  const allWords = [...words, ...words];

  return (
    <section ref={ref} className="py-6 overflow-hidden border-y border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden py-4 marquee-wrapper">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-surface-light dark:from-surface-dark to-transparent z-10 pointer-events-none" />

          <div className="marquee-track marquee-scroll">
            {allWords.map((word, i) => (
              <span
                key={i}
                className={`flex-shrink-0 mx-4 md:mx-6 font-heading text-2xl md:text-4xl font-bold whitespace-nowrap ${
                  word === '✦'
                    ? 'text-primary-500 text-lg md:text-xl'
                    : 'text-neutral-300 dark:text-neutral-700'
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
