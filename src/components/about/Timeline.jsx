import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Rocket, Globe2, Microscope, Award, Leaf, Beaker, Zap } from 'lucide-react';

const events = [
    {
        year: "2005",
        title: "Foundation",
        description: "Ribbon Pharma was established with a small team of 5 visionaries.",
        icon: Rocket,
        color: "from-blue-600 to-cyan-500",
        tag: "GENESIS"
    },
    {
        year: "2010",
        title: "Global Expansion",
        description: "Expanded operations to 10 countries across Asia and Africa.",
        icon: Globe2,
        color: "from-indigo-600 to-purple-500",
        tag: "SCALING"
    },
    {
        year: "2015",
        title: "R&D Center",
        description: "Inaugurated state-of-the-art research facility in Hyderabad.",
        icon: Microscope,
        color: "from-emerald-600 to-teal-500",
        tag: "RESEARCH"
    },
    {
        year: "2020",
        title: "Innovation Award",
        description: "Received the Global Healthcare Innovation Award for new drug delivery systems.",
        icon: Award,
        color: "from-amber-500 to-orange-500",
        tag: "HONORED"
    },
    {
        year: "2024",
        title: "Sustainability",
        description: "Achieved 100% renewable energy usage in manufacturing plants.",
        icon: Leaf,
        color: "from-green-600 to-emerald-500",
        tag: "FUTURE"
    },
];

const TimelineCard = ({ event, index }) => {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-32 items-center">

            {/* 1. Year Marker (Floating Side) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-3 flex md:justify-end"
            >
                <div className="relative">
                    <h4 className="text-7xl max-[769px]:text-6xl max-[426px]:text-5xl font-black text-slate-200/50 group-hover:text-blue-500/20 transition-colors">
                        {event.year}
                    </h4>
                    <div className={`absolute -bottom-2 left-0 md:left-auto md:right-0 w-12 h-1 bg-gradient-to-r ${event.color} rounded-full`} />
                </div>
            </motion.div>

            {/* 3. Main Glass Content Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:col-span-8 md:col-start-5 group"
            >
                <div className="relative p-1 bg-gradient-to-br from-white to-slate-100 rounded-[2.5rem] shadow-2xl overflow-hidden">
                    {/* Interior Glass Panel */}
                    <div className="bg-white/90 backdrop-blur-xl rounded-[2.3rem] p-12 max-[769px]:p-8 max-[376px]:p-6 max-[321px]:p-4">

                        {/* Scanning Light Effect */}
                        <motion.div
                            animate={{ left: ['-100%', '200%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent skew-x-12 z-0"
                        />

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} text-white shadow-lg`}>
                                    <event.icon size={32} />
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-slate-400 uppercase">{event.tag}</span>
                                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                                        <Zap size={14} /> PHASE_0{index + 1}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter">
                                {event.title}
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
                                {event.description}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section id="timeline" className="py-24 max-[769px]:py-16 bg-slate-50 overflow-hidden scroll-mt-24" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Modern Header Layout */}
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-600 text-xs font-black tracking-widest mb-6"
                        >
                            <Beaker size={14} />
                            CHRONICLES OF SCIENCE
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-8xl max-[426px]:text-6xl max-[376px]:text-5xl max-[321px]:text-4xl font-black text-slate-900 tracking-tighter leading-none"
                        >
                            Our <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Legacy.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 font-medium text-xl max-w-sm md:text-right"
                    >
                        Two decades of bridging the gap between pharmaceutical research and patient care.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Animated Progress "Beam" */}
                    <motion.div
                        style={{ opacity }}
                        className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200"
                    >
                        <motion.div
                            style={{ scaleY }}
                            className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600 origin-top"
                        />
                        {/* Flying Particle on line */}
                        <motion.div
                            style={{ top: useTransform(scaleY, [0, 1], ["0%", "100%"]) }}
                            className="absolute left-1/2 -translate-x-1/2 w-3 h-12 bg-blue-400 blur-sm rounded-full opacity-50"
                        />
                    </motion.div>

                    {/* Content Stream */}
                    <div className="relative z-10">
                        {events.map((event, index) => (
                            <TimelineCard key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;