import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

/* ─── Astronaut (bigger, wilder drift, jetpack flames) ─── */
function Astronaut() {
    return (
        <motion.div
            className="fixed z-[2] pointer-events-none select-none"
            style={{ bottom: '12%', right: '5%' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
        >
            <motion.div
                animate={{
                    y: [0, -50, 15, -35, 10, -20, 0],
                    x: [0, 25, -15, 30, -10, 20, 0],
                    rotate: [0, 8, -5, 12, -8, 5, 0],
                }}
                transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
            >
                <div className="relative">
                    {/* Tether line with glow */}
                    <svg className="absolute -left-20 top-4 w-24 h-28 opacity-25" viewBox="0 0 96 112">
                        <motion.path
                            d="M96 0 Q72 35, 48 55 Q24 75, 0 112"
                            fill="none"
                            stroke="url(#tether-grad)"
                            strokeWidth="1"
                            strokeDasharray="5 4"
                            animate={{ strokeDashoffset: [0, -20] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                        <defs>
                            <linearGradient id="tether-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ed7b0f" />
                                <stop offset="100%" stopColor="white" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Astronaut SVG — bigger */}
                    <svg width="64" height="72" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        {/* Helmet */}
                        <ellipse cx="24" cy="16" rx="14" ry="15" fill="#e8e8ec" stroke="#c0c0c8" strokeWidth="1.2"/>
                        {/* Visor */}
                        <ellipse cx="24" cy="15" rx="9" ry="9" fill="url(#visor-grad2)" opacity="0.95"/>
                        {/* Visor shine */}
                        <ellipse cx="20" cy="12" rx="3" ry="2.5" fill="white" opacity="0.35"/>
                        {/* Visor reflection line */}
                        <motion.ellipse
                            cx="28" cy="18" rx="2" ry="1"
                            fill="white" opacity="0.15"
                            animate={{ opacity: [0.15, 0.4, 0.15] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        {/* Body */}
                        <rect x="12" y="29" width="24" height="18" rx="6" fill="#e0e0e6" stroke="#c0c0c8" strokeWidth="1"/>
                        {/* Backpack */}
                        <rect x="8" y="31" width="5" height="14" rx="2" fill="#c8c8d0" stroke="#b0b0b8" strokeWidth="0.8"/>
                        {/* Jetpack flames */}
                        <motion.g
                            animate={{ opacity: [0.6, 1, 0.6], scaleY: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 0.4, repeat: Infinity }}
                            style={{ transformOrigin: '10px 45px' }}
                        >
                            <ellipse cx="10" cy="48" rx="2" ry="4" fill="url(#flame-grad)" opacity="0.7"/>
                            <ellipse cx="10" cy="50" rx="1" ry="2" fill="#ff6b00" opacity="0.9"/>
                        </motion.g>
                        {/* Left arm */}
                        <motion.g
                            animate={{ rotate: [0, 20, -10, 15, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ transformOrigin: '12px 34px' }}
                        >
                            <rect x="2" y="32" width="11" height="5" rx="2.5" fill="#e0e0e6" stroke="#c0c0c8" strokeWidth="0.8"/>
                            <circle cx="3" cy="34.5" r="3" fill="#ddd" stroke="#bbb" strokeWidth="0.6"/>
                        </motion.g>
                        {/* Right arm — waving */}
                        <motion.g
                            animate={{ rotate: [0, -25, 15, -20, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            style={{ transformOrigin: '36px 34px' }}
                        >
                            <rect x="35" y="32" width="11" height="5" rx="2.5" fill="#e0e0e6" stroke="#c0c0c8" strokeWidth="0.8"/>
                            <circle cx="45" cy="34.5" r="3" fill="#ddd" stroke="#bbb" strokeWidth="0.6"/>
                        </motion.g>
                        {/* Left leg */}
                        <motion.rect
                            x="14" y="45" width="7" height="10" rx="3" fill="#e0e0e6" stroke="#c0c0c8" strokeWidth="0.8"
                            animate={{ rotate: [0, 5, -3, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            style={{ transformOrigin: '17px 45px' }}
                        />
                        {/* Right leg */}
                        <motion.rect
                            x="27" y="45" width="7" height="10" rx="3" fill="#e0e0e6" stroke="#c0c0c8" strokeWidth="0.8"
                            animate={{ rotate: [0, -5, 3, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                            style={{ transformOrigin: '30px 45px' }}
                        />
                        {/* Chest light — pulsing */}
                        <motion.circle
                            cx="24" cy="36" r="2.5"
                            animate={{ fill: ['#ed7b0f', '#f09332', '#22c53e', '#ed7b0f'], r: [2.5, 3, 2.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        {/* Chest light glow */}
                        <motion.circle
                            cx="24" cy="36" r="5"
                            fill="none"
                            stroke="#ed7b0f"
                            strokeWidth="0.5"
                            animate={{ r: [5, 8, 5], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <defs>
                            <linearGradient id="visor-grad2" x1="15" y1="8" x2="33" y2="22">
                                <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.9"/>
                                <stop offset="30%" stopColor="#0ea5e9" stopOpacity="0.85"/>
                                <stop offset="60%" stopColor="#ec4899" stopOpacity="0.6"/>
                                <stop offset="100%" stopColor="#1e1e3a" stopOpacity="0.95"/>
                            </linearGradient>
                            <linearGradient id="flame-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#fbbf24"/>
                                <stop offset="50%" stopColor="#f97316"/>
                                <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Floating oxygen bubbles */}
                    {[0, 1, 2].map(i => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-white/20"
                            style={{
                                width: 3 + i * 2,
                                height: 3 + i * 2,
                                left: 20 + i * 12,
                                top: 10,
                            }}
                            animate={{
                                y: [-10, -40 - i * 15],
                                x: [0, (i - 1) * 8],
                                opacity: [0.4, 0],
                                scale: [1, 1.5],
                            }}
                            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 1.2 }}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── Satellite (bigger, more detail, signal beams) ─── */
function Satellite() {
    return (
        <motion.div
            className="fixed z-[2] pointer-events-none select-none hidden md:block"
            style={{ top: '8%', left: '6%' }}
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 2.5, duration: 1.5, ease: 'backOut' }}
        >
            <motion.div
                animate={{
                    y: [0, -50, 15, -30, 10, 0],
                    x: [0, 30, -20, 40, -10, 0],
                    rotate: [0, 5, -3, 6, -2, 0],
                }}
                transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg width="72" height="48" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_20px_rgba(109,40,217,0.25)]">
                    {/* Left solar panel */}
                    <rect x="0" y="10" width="18" height="16" rx="1.5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" opacity="0.8"/>
                    <line x1="6" y1="10" x2="6" y2="26" stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
                    <line x1="12" y1="10" x2="12" y2="26" stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
                    <line x1="0" y1="18" x2="18" y2="18" stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
                    {/* Solar panel glow */}
                    <motion.rect
                        x="0" y="10" width="18" height="16" rx="1.5"
                        fill="#3b82f6"
                        animate={{ opacity: [0, 0.15, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    {/* Body */}
                    <rect x="20" y="12" width="16" height="12" rx="3" fill="#c8c8d4" stroke="#a0a0b0" strokeWidth="1"/>
                    {/* Antenna */}
                    <line x1="28" y1="4" x2="28" y2="12" stroke="#a0a0b0" strokeWidth="1"/>
                    <motion.circle
                        cx="28" cy="3" r="2.5"
                        fill="none"
                        stroke="#ed7b0f"
                        strokeWidth="0.8"
                        animate={{ r: [2.5, 5, 2.5], opacity: [0.9, 0.1, 0.9] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <circle cx="28" cy="3" r="1.5" fill="#ed7b0f"/>
                    {/* Right solar panel */}
                    <rect x="38" y="10" width="18" height="16" rx="1.5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.8" opacity="0.8"/>
                    <line x1="44" y1="10" x2="44" y2="26" stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
                    <line x1="50" y1="10" x2="50" y2="26" stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
                    <line x1="38" y1="18" x2="56" y2="18" stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
                    <motion.rect
                        x="38" y="10" width="18" height="16" rx="1.5"
                        fill="#3b82f6"
                        animate={{ opacity: [0.15, 0, 0.15] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    {/* Status light */}
                    <motion.circle
                        cx="28" cy="18" r="1.5"
                        animate={{ fill: ['#22c53e', '#4ade65', '#22c53e'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    {/* Signal waves — triple */}
                    {[0, 1, 2].map(i => (
                        <motion.circle
                            key={i}
                            cx="28" cy="3" r="6"
                            fill="none"
                            stroke="#ed7b0f"
                            strokeWidth="0.3"
                            animate={{ r: [6, 18], opacity: [0.5, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: i * 0.8 }}
                        />
                    ))}
                    {/* Data beam — downlink */}
                    <motion.line
                        x1="28" y1="24" x2="28" y2="60"
                        stroke="url(#beam-grad)"
                        strokeWidth="0.5"
                        strokeDasharray="2 3"
                        animate={{ opacity: [0, 0.6, 0], strokeDashoffset: [0, -10] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <defs>
                        <linearGradient id="beam-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22c53e"/>
                            <stop offset="100%" stopColor="#22c53e" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </motion.div>
    );
}

/* ─── Black Hole with accretion disk ─── */
function BlackHole() {
    return (
        <motion.div
            className="fixed z-[1] pointer-events-none select-none hidden lg:block"
            style={{ top: '35%', left: '3%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 4, duration: 2, ease: 'backOut' }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    {/* Accretion disk outer glow */}
                    <motion.ellipse
                        cx="40" cy="40" rx="38" ry="10"
                        fill="none"
                        stroke="url(#accretion-outer)"
                        strokeWidth="2"
                        animate={{ ry: [10, 12, 10] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Accretion disk inner */}
                    <motion.ellipse
                        cx="40" cy="40" rx="30" ry="7"
                        fill="none"
                        stroke="url(#accretion-inner)"
                        strokeWidth="3"
                        animate={{ ry: [7, 9, 7] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    {/* Event horizon */}
                    <circle cx="40" cy="40" r="12" fill="#050510"/>
                    <circle cx="40" cy="40" r="12" fill="url(#bh-edge)" />
                    {/* Gravitational lensing ring */}
                    <motion.circle
                        cx="40" cy="40" r="14"
                        fill="none"
                        stroke="#ed7b0f"
                        strokeWidth="0.5"
                        animate={{ r: [14, 16, 14], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Photon ring */}
                    <motion.circle
                        cx="40" cy="40" r="18"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.3"
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <defs>
                        <radialGradient id="bh-edge">
                            <stop offset="70%" stopColor="#050510"/>
                            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4"/>
                        </radialGradient>
                        <linearGradient id="accretion-outer" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#ed7b0f" stopOpacity="0.8"/>
                            <stop offset="25%" stopColor="#f97316" stopOpacity="0.4"/>
                            <stop offset="50%" stopColor="#6d28d9" stopOpacity="0.6"/>
                            <stop offset="75%" stopColor="#0ea5e9" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#ed7b0f" stopOpacity="0.8"/>
                        </linearGradient>
                        <linearGradient id="accretion-inner" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9"/>
                            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9"/>
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
            {/* Particles being pulled in */}
            {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-orange-400"
                    style={{ left: 40, top: 40 }}
                    animate={{
                        x: [30 + i * 10, 5, 0],
                        y: [(i - 2) * 15, (i - 2) * 3, 0],
                        opacity: [0.7, 0.4, 0],
                        scale: [1, 0.5, 0],
                    }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.7 }}
                />
            ))}
        </motion.div>
    );
}

/* ─── Comet streaking across screen ─── */
function Comet() {
    return (
        <>
            {/* Comet 1 — diagonal top-right to bottom-left */}
            <motion.div
                className="fixed z-[2] pointer-events-none select-none hidden md:block"
                initial={{ top: '-5%', right: '-5%', opacity: 0 }}
                animate={{
                    top: ['−5%', '110%'],
                    right: ['-5%', '110%'],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatDelay: 15, ease: 'linear' }}
            >
                <div className="relative">
                    {/* Comet head */}
                    <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_5px_rgba(255,255,255,0.5),0_0_40px_10px_rgba(14,165,233,0.3)]" />
                    {/* Comet tail */}
                    <div
                        className="absolute top-1/2 right-full -translate-y-1/2 w-32 h-[2px]"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.2), rgba(255,255,255,0.6))',
                            transform: 'translateY(-50%) rotate(45deg)',
                            transformOrigin: 'right center',
                        }}
                    />
                    <div
                        className="absolute top-1/2 right-full -translate-y-1/2 w-20 h-[1px]"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(237,123,15,0.3), rgba(255,255,255,0.4))',
                            transform: 'translateY(-50%) rotate(48deg)',
                            transformOrigin: 'right center',
                        }}
                    />
                </div>
            </motion.div>

            {/* Comet 2 — slower, different angle */}
            <motion.div
                className="fixed z-[2] pointer-events-none select-none hidden lg:block"
                initial={{ top: '20%', left: '-5%', opacity: 0 }}
                animate={{
                    top: ['20%', '-10%'],
                    left: ['-5%', '110%'],
                    opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, repeatDelay: 25, delay: 8, ease: 'linear' }}
            >
                <div className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_3px_rgba(14,165,233,0.4)]" />
            </motion.div>
        </>
    );
}

/* ─── UFO with tractor beam ─── */
function UFO() {
    return (
        <motion.div
            className="fixed z-[2] pointer-events-none select-none hidden lg:block"
            style={{ top: '18%', right: '18%' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 5, duration: 2 }}
        >
            <motion.div
                animate={{
                    y: [0, -20, 8, -15, 5, 0],
                    x: [0, 15, -10, 20, -5, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
                    {/* Dome */}
                    <ellipse cx="25" cy="18" rx="10" ry="8" fill="url(#ufo-dome)" opacity="0.8"/>
                    {/* Body */}
                    <ellipse cx="25" cy="22" rx="22" ry="6" fill="url(#ufo-body)"/>
                    {/* Body rim glow */}
                    <motion.ellipse
                        cx="25" cy="22" rx="22" ry="6"
                        fill="none"
                        stroke="#ed7b0f"
                        strokeWidth="0.8"
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    {/* Running lights */}
                    {[-14, -7, 0, 7, 14].map((dx, i) => (
                        <motion.circle
                            key={i}
                            cx={25 + dx} cy="22" r="1"
                            fill="#ed7b0f"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                        />
                    ))}
                    {/* Tractor beam */}
                    <motion.polygon
                        points="18,28 32,28 38,58 12,58"
                        fill="url(#tractor-beam)"
                        animate={{ opacity: [0.15, 0.35, 0.15] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Beam particles */}
                    {[0, 1, 2].map(i => (
                        <motion.circle
                            key={`bp-${i}`}
                            cx={22 + i * 4} cy="35"
                            r="0.5"
                            fill="white"
                            animate={{ cy: [30, 55], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                        />
                    ))}
                    <defs>
                        <radialGradient id="ufo-dome">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4"/>
                        </radialGradient>
                        <linearGradient id="ufo-body" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#44403c"/>
                            <stop offset="50%" stopColor="#78716c"/>
                            <stop offset="100%" stopColor="#44403c"/>
                        </linearGradient>
                        <linearGradient id="tractor-beam" x1="0.5" y1="0" x2="0.5" y2="1">
                            <stop offset="0%" stopColor="#22c53e" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#22c53e" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </motion.div>
    );
}

/* ─── Wormhole Portal ─── */
function Wormhole() {
    return (
        <motion.div
            className="fixed z-[1] pointer-events-none select-none hidden lg:block"
            style={{ bottom: '20%', left: '15%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 6, duration: 2, ease: 'backOut' }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    {/* Outer ring */}
                    <motion.circle
                        cx="30" cy="30" r="28"
                        fill="none"
                        stroke="url(#worm-outer)"
                        strokeWidth="1.5"
                        animate={{ r: [28, 26, 28] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    {/* Mid ring */}
                    <motion.circle
                        cx="30" cy="30" r="20"
                        fill="none"
                        stroke="url(#worm-mid)"
                        strokeWidth="2"
                        animate={{ r: [20, 22, 20] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Inner ring */}
                    <motion.circle
                        cx="30" cy="30" r="12"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="1.5"
                        animate={{ r: [12, 14, 12], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    {/* Center void */}
                    <circle cx="30" cy="30" r="6" fill="#050510"/>
                    <motion.circle
                        cx="30" cy="30" r="6"
                        fill="url(#worm-center)"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Energy spokes */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <motion.line
                            key={deg}
                            x1="30" y1="30"
                            x2={30 + Math.cos(deg * Math.PI / 180) * 28}
                            y2={30 + Math.sin(deg * Math.PI / 180) * 28}
                            stroke="#6d28d9"
                            strokeWidth="0.3"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
                        />
                    ))}
                    <defs>
                        <linearGradient id="worm-outer" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#6d28d9"/>
                            <stop offset="50%" stopColor="#0ea5e9"/>
                            <stop offset="100%" stopColor="#ec4899"/>
                        </linearGradient>
                        <linearGradient id="worm-mid" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#0ea5e9"/>
                            <stop offset="100%" stopColor="#6d28d9"/>
                        </linearGradient>
                        <radialGradient id="worm-center">
                            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="#050510"/>
                        </radialGradient>
                    </defs>
                </svg>
            </motion.div>
            {/* Warping particles spiral */}
            {[0, 1, 2, 3].map(i => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-purple-400"
                    style={{ left: 30, top: 30 }}
                    animate={{
                        x: [20 * Math.cos(i * 90 * Math.PI / 180), 0],
                        y: [20 * Math.sin(i * 90 * Math.PI / 180), 0],
                        opacity: [0.8, 0],
                        scale: [1, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}
        </motion.div>
    );
}

/* ─── Floating Planets (upgraded) ─── */
function Planets() {
    return (
        <>
            {/* Purple planet with ring + atmosphere glow */}
            <motion.div
                className="fixed z-[1] pointer-events-none select-none hidden lg:block"
                style={{ top: '22%', right: '12%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                transition={{ delay: 2.5, duration: 2 }}
            >
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 360] }}
                    transition={{ y: { duration: 12, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 80, repeat: Infinity, ease: 'linear' } }}
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        {/* Atmosphere glow */}
                        <motion.circle
                            cx="18" cy="18" r="17"
                            fill="none"
                            stroke="#6d28d9"
                            strokeWidth="1"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <circle cx="18" cy="18" r="14" fill="url(#planet1-grad2)" />
                        {/* Surface detail */}
                        <circle cx="13" cy="15" r="3" fill="#5b21b6" opacity="0.3"/>
                        <circle cx="22" cy="20" r="2" fill="#7c3aed" opacity="0.2"/>
                        <ellipse cx="18" cy="18" rx="22" ry="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" transform="rotate(-20 18 18)"/>
                        <defs>
                            <radialGradient id="planet1-grad2">
                                <stop offset="0%" stopColor="#7c3aed" />
                                <stop offset="60%" stopColor="#6d28d9" />
                                <stop offset="100%" stopColor="#3b0d7a" />
                            </radialGradient>
                        </defs>
                    </svg>
                </motion.div>
            </motion.div>

            {/* Cratered moon */}
            <motion.div
                className="fixed z-[1] pointer-events-none select-none hidden md:block"
                style={{ bottom: '28%', left: '10%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{ delay: 4, duration: 2 }}
            >
                <motion.div
                    animate={{ y: [0, 12, -6, 0], x: [0, -10, 6, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="8" fill="#c8c8d4" />
                        <circle cx="6" cy="6" r="2" fill="#b0b0bc" opacity="0.5" />
                        <circle cx="12" cy="10" r="1.5" fill="#b0b0bc" opacity="0.4" />
                        <circle cx="8" cy="12" r="1" fill="#b0b0bc" opacity="0.3" />
                        <circle cx="11" cy="5" r="0.7" fill="#a0a0ac" opacity="0.3" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Cyan planet with aurora */}
            <motion.div
                className="fixed z-[1] pointer-events-none select-none hidden lg:block"
                style={{ top: '58%', right: '4%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 3.5, duration: 2 }}
            >
                <motion.div
                    animate={{ y: [0, -20, 8, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="13" cy="13" r="11" fill="url(#planet2-grad2)" />
                        {/* Aurora effect */}
                        <motion.ellipse
                            cx="13" cy="6" rx="8" ry="2"
                            fill="#22c53e"
                            opacity="0.2"
                            animate={{ opacity: [0.1, 0.3, 0.1], ry: [2, 3, 2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <ellipse cx="13" cy="13" rx="16" ry="2.5" fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="0.8" transform="rotate(-10 13 13)"/>
                        <defs>
                            <radialGradient id="planet2-grad2">
                                <stop offset="0%" stopColor="#22d3ee" />
                                <stop offset="60%" stopColor="#0ea5e9" />
                                <stop offset="100%" stopColor="#0369a1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </motion.div>
            </motion.div>

            {/* Tiny red dwarf */}
            <motion.div
                className="fixed z-[1] pointer-events-none select-none hidden lg:block"
                style={{ top: '75%', left: '25%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 7, duration: 2 }}
            >
                <motion.div
                    animate={{ y: [0, -8, 3, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" fill="#ef4444" opacity="0.6"/>
                        <motion.circle
                            cx="6" cy="6" r="5"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="0.5"
                            animate={{ r: [5, 7, 5], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </>
    );
}

/* ─── Space Debris / Rocks (more + tumbling) ─── */
function SpaceDebris() {
    const debris = [
        { x: '93%', y: '38%', size: 6, delay: 1, dur: 22, dx: -20, dy: 25 },
        { x: '2%', y: '52%', size: 5, delay: 3, dur: 28, dx: 15, dy: -22 },
        { x: '72%', y: '82%', size: 4, delay: 5, dur: 18, dx: -12, dy: -16 },
        { x: '48%', y: '6%', size: 5, delay: 2, dur: 25, dx: 16, dy: 20 },
        { x: '16%', y: '33%', size: 3, delay: 6, dur: 20, dx: -8, dy: 12 },
        { x: '58%', y: '45%', size: 3, delay: 4, dur: 30, dx: 10, dy: -14 },
        { x: '85%', y: '15%', size: 4, delay: 7, dur: 24, dx: -18, dy: 10 },
        { x: '35%', y: '70%', size: 3, delay: 8, dur: 26, dx: 8, dy: -20 },
    ];

    return (
        <>
            {debris.map((d, i) => (
                <motion.div
                    key={i}
                    className="fixed z-[1] pointer-events-none select-none hidden md:block"
                    style={{ left: d.x, top: d.y }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: d.delay, duration: 1 }}
                >
                    <motion.div
                        animate={{
                            x: [0, d.dx, -d.dx * 0.5, d.dx * 0.3, 0],
                            y: [0, d.dy, -d.dy * 0.7, d.dy * 0.4, 0],
                            rotate: [0, 120, 240, 360],
                        }}
                        transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <svg width={d.size * 2} height={d.size * 2} viewBox="0 0 10 10" fill="none">
                            <polygon
                                points="5,0 7,3 10,5 7,7 5,10 3,7 0,5 3,3"
                                fill="#78716c"
                                opacity="0.5"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            ))}
        </>
    );
}

/* ─── Space Station (ISS-like) ─── */
function SpaceStation() {
    return (
        <motion.div
            className="fixed z-[2] pointer-events-none select-none hidden xl:block"
            style={{ top: '65%', left: '6%' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ delay: 5.5, duration: 2 }}
        >
            <motion.div
                animate={{
                    y: [0, -15, 5, -10, 0],
                    x: [0, 8, -5, 10, 0],
                    rotate: [0, 1, -1, 0.5, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            >
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                    {/* Main truss */}
                    <rect x="5" y="10" width="50" height="4" rx="1" fill="#a0a0b0" stroke="#78716c" strokeWidth="0.5"/>
                    {/* Center module */}
                    <rect x="22" y="6" width="16" height="12" rx="3" fill="#d4d4d8" stroke="#a0a0b0" strokeWidth="0.8"/>
                    {/* Solar panel left */}
                    <rect x="0" y="2" width="14" height="8" rx="1" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
                    <line x1="7" y1="2" x2="7" y2="10" stroke="#3b82f6" strokeWidth="0.3" opacity="0.4"/>
                    {/* Solar panel left bottom */}
                    <rect x="0" y="14" width="14" height="8" rx="1" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
                    <line x1="7" y1="14" x2="7" y2="22" stroke="#3b82f6" strokeWidth="0.3" opacity="0.4"/>
                    {/* Solar panel right */}
                    <rect x="46" y="2" width="14" height="8" rx="1" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
                    <line x1="53" y1="2" x2="53" y2="10" stroke="#3b82f6" strokeWidth="0.3" opacity="0.4"/>
                    {/* Solar panel right bottom */}
                    <rect x="46" y="14" width="14" height="8" rx="1" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" opacity="0.7"/>
                    <line x1="53" y1="14" x2="53" y2="22" stroke="#3b82f6" strokeWidth="0.3" opacity="0.4"/>
                    {/* Window lights */}
                    <motion.circle
                        cx="27" cy="12" r="1" fill="#fbbf24"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="33" cy="12" r="1" fill="#22c53e"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                </svg>
            </motion.div>
        </motion.div>
    );
}

/* ─── Nebula Gas Cloud ─── */
function NebulaCloud() {
    return (
        <>
            <motion.div
                className="fixed z-[0] pointer-events-none select-none hidden lg:block"
                style={{ top: '10%', right: '30%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 3, duration: 3 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div
                        className="w-48 h-32 rounded-full blur-3xl"
                        style={{ background: 'radial-gradient(ellipse, rgba(109,40,217,0.3) 0%, rgba(236,72,153,0.1) 50%, transparent 80%)' }}
                    />
                </motion.div>
            </motion.div>
            <motion.div
                className="fixed z-[0] pointer-events-none select-none hidden lg:block"
                style={{ bottom: '5%', right: '20%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 4, duration: 3 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div
                        className="w-36 h-24 rounded-full blur-3xl"
                        style={{ background: 'radial-gradient(ellipse, rgba(14,165,233,0.25) 0%, rgba(34,197,94,0.08) 50%, transparent 80%)' }}
                    />
                </motion.div>
            </motion.div>
        </>
    );
}

/* ─── Main Export ─── */
export default function SpaceElements() {
    return (
        <>
            <NebulaCloud />
            <Astronaut />
            <Satellite />
            <BlackHole />
            <Comet />
            <UFO />
            <Wormhole />
            <SpaceStation />
            <Planets />
            <SpaceDebris />
        </>
    );
}
