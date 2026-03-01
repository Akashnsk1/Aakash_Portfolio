import { motion } from 'framer-motion';
import Profile from '../assets/profile.webp';
export default function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full rounded-2xl overflow-hidden group"
        >
            {/* Photo — covers the full card */}
            <div className="aspect-[3/4] w-full">
                <img
                    src={Profile.src}
                    alt="Akash"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Info at bottom of card */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h3 className="font-heading font-semibold text-xl text-white leading-tight">
                            Akash
                        </h3>
                        <p className="font-mono text-[11px] text-white/60 mt-1 tracking-wide">
                            Cloud & DevOps Engineer
                        </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                        </span>
                        <span className="text-[10px] font-mono text-white/50">Available</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
