import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Microscope, ThermometerSnowflake, FileCheck, FlaskConical, Beaker } from 'lucide-react';

const QualityControl = () => {
    const qualityPillars = [
        {
            title: "Rigorous Validation",
            desc: "Each formulation undergoes rigorous testing for safety, efficacy, and stability before reaching the market.",
            icon: Microscope,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Certified Excellence",
            desc: "Our systems are ISO 9001:2008 certified, ensuring we meet international standards of quality.",
            icon: ShieldCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            title: "Infrastructure",
            desc: "We continuously upgrade our technology and infrastructure to match evolving healthcare needs.",
            icon: ThermometerSnowflake,
            color: "text-cyan-600",
            bg: "bg-cyan-50"
        },
        {
            title: "Research-Driven",
            desc: "Focusing on research-based high-quality medicines designed with precision and patient care.",
            icon: FlaskConical,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        }
    ];

    return (
        <section id="quality" className="py-24 bg-white overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold mb-6 tracking-[0.2em]"
                        >
                            <Beaker size={14} />
                            ZERO TOLERANCE POLICY
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight"
                        >
                            The Benchmark of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Quality Control.
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg pb-2"
                    >
                        Built on the foundation of ACCESS LIFE SCIENCE, we bridge the gap between cutting-edge science and patient safety through a multi-layered verification process.
                    </motion.p>
                </div>

                {/* Quality Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {qualityPillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-6 sm:p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Animated Scan Line */}
                            <motion.div
                                animate={{ top: ['-10%', '110%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-[1px] bg-blue-500/20 z-0 opacity-0 group-hover:opacity-100"
                            />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <pillar.icon size={28} />
                                </div>

                                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-6 flex-grow">
                                    {pillar.desc}
                                </p>

                                <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    <FileCheck size={14} />
                                    Verified Standard
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legacy Compliance Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                            <ShieldCheck className="text-blue-400" />
                        </div>
                        <div>
                            <p className="text-sm font-mono text-blue-400">COMPLIANCE PROTOCOL</p>
                            <p className="text-lg font-bold">Adhering to WHO-GMP & ISO Quality Benchmarks</p>
                        </div>
                    </div>
                    <div className="text-sm font-medium text-slate-400 max-w-sm text-center md:text-right">
                        Our legacy of innovation is compassionate toward your radiant health, ensuring every pill is a promise kept.
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default QualityControl;