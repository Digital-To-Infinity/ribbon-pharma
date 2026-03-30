import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Baby, Bone, Stethoscope, Venus, Activity, Microscope, ArrowUpRight } from 'lucide-react';

// --- 3D Interactive Card Component ---
const SpecializationCard = ({ spec, index, gridClass }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative group ${gridClass}`}
        >
            {/* Background Glow */}
            <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />

            {/* Main Card */}
            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative h-full w-full bg-white/80 backdrop-blur-xl border border-slate-200 p-8 max-[321px]:p-6 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col justify-between"
            >
                {/* Micro-Data Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${spec.bg} ${spec.textColor} shadow-lg shadow-current/10 transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                            <spec.icon size={28} />
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Sector_ID</span>
                            <span className="text-sm font-mono font-black text-slate-900">0{index + 1}</span>
                        </div>
                    </div>

                    <h3 className="text-3xl max-[321px]:text-2xl font-black text-slate-900 mb-4 tracking-tighter">
                        {spec.title}
                    </h3>
                    <p className="text-slate-500 max-[321px]:text-base font-medium leading-relaxed mb-6 max-[321px]:mb-2 group-hover:text-slate-700 transition-colors">
                        {spec.desc}
                    </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <Activity size={14} className={spec.textColor} />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Research</span>
                    </div>
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${spec.bg} ${spec.textColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all`}>
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const Specializations = () => {
    const specs = [
        {
            title: "Gynecology",
            desc: "Supporting women’s health with advanced formulations for reproductive care and PCOS.",
            icon: Venus,
            color: "from-pink-500 to-rose-400",
            bg: "bg-pink-50",
            textColor: "text-pink-600",
            gridClass: "lg:col-span-7"
        },
        {
            title: "Orthopedics",
            desc: "Solutions for arthritis, bone strength, and mobility.",
            icon: Bone,
            color: "from-blue-600 to-cyan-500",
            bg: "bg-blue-50",
            textColor: "text-blue-600",
            gridClass: "lg:col-span-5"
        },
        {
            title: "Pediatrics",
            desc: "Trusted pediatric medicines ensuring the health of the next generation.",
            icon: Baby,
            color: "from-green-500 to-emerald-400",
            bg: "bg-green-50",
            textColor: "text-green-600",
            gridClass: "lg:col-span-5"
        },
        {
            title: "Physician Care",
            desc: "Holistic healthcare across chronic and acute therapies for primary medical care.",
            icon: Stethoscope,
            color: "from-purple-600 to-violet-500",
            bg: "bg-purple-50",
            textColor: "text-purple-600",
            gridClass: "lg:col-span-7"
        }
    ];

    return (
        <section className="py-24 max-[769px]:py-16 max-[376px]:py-10 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000">
                    <path d="M0,500 C200,300 400,700 600,500 S800,300 1000,500" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-600" />
                    <path d="M0,200 C300,400 700,0 1000,200" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-600" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header Container */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 max-[769px]:mb-10 gap-8">
                    <div className="max-w-2xl w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-4"
                        >
                            <Microscope size={16} />
                            Therapeutic Verticals
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl max-[376px]:text-4xl max-[321px]:text-3xl font-black text-slate-900 tracking-tighter leading-[1.1]"
                        >
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Specializations</span>.
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-500 font-medium text-lg max-[321px]:text-base text-left lg:text-right max-w-sm"
                    >
                        Pioneering pharmaceutical excellence through targeted therapeutic research.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ perspective: "2000px" }}>
                    {specs.map((spec, index) => (
                        <SpecializationCard
                            key={index}
                            spec={spec}
                            index={index}
                            gridClass={spec.gridClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specializations;