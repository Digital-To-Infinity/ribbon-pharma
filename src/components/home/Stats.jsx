import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Package, Award, Globe, Activity, Microscope, ShieldCheck } from 'lucide-react';

// --- Smooth Spring Counter Component ---
const MotionNumber = ({ value, suffix = "+" }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 40, damping: 20 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) motionValue.set(value);
    }, [isInView, value, motionValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Stats = () => {
    return (
        <section className="relative py-24 max-[426px]:py-16 bg-[#020617] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                    
                    {/* 1. Main Feature Block - 20 Years */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 group relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 max-[376px]:p-6 overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                                    <Award className="text-blue-400 w-8 h-8" />
                                </div>
                                <Activity className="text-slate-700 group-hover:text-blue-500/50 transition-colors" />
                            </div>
                            
                            <div className="mt-12">
                                <h3 className="text-slate-400 font-mono text-sm tracking-[0.3em] uppercase mb-2">Heritage of Trust</h3>
                                <div className="text-7xl md:text-8xl font-black text-white mb-4">
                                    <MotionNumber value={20} />
                                    <span className="text-blue-500">.</span>
                                </div>
                                <p className="text-xl max-[376px]:text-lg max-[321px]:text-base text-slate-300 max-w-md leading-relaxed">
                                    Years of unwavering commitment to pharmaceutical excellence and global healthcare.
                                </p>
                            </div>
                        </div>
                        {/* Interactive Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 group-hover:opacity-40 transition-opacity" />
                    </motion.div>

                    {/* 2. Side Stack - Global Partners */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-md border border-white/5 rounded-[32px] p-8 max-[376px]:p-6 hover:border-blue-500/30 transition-all"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-purple-500/10 rounded-2xl">
                                    <Globe className="text-purple-400 w-8 h-8" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">
                                        <MotionNumber value={50} />+
                                    </div>
                                    <div className="text-slate-400 font-bold text-sm max-[376px]:text-xs uppercase tracking-wider">Global Partners</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Products Block */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-md border border-white/5 rounded-[32px] p-8 hover:border-emerald-500/30 transition-all"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-emerald-500/10 rounded-2xl">
                                    <Package className="text-emerald-400 w-8 h-8" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">
                                        <MotionNumber value={500} />+
                                    </div>
                                    <div className="text-slate-400 font-bold text-sm max-[376px]:text-xs uppercase tracking-wider">Quality Formulations</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 4. Mini Certifications Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-blue-600 rounded-[32px] p-8 flex items-center justify-between group cursor-help overflow-hidden relative"
                        >
                            <div className="relative z-10">
                                <div className="text-white/80 font-mono text-xs mb-1">COMPLIANCE</div>
                                <div className="text-white text-xl font-bold">WHO-GMP & ISO</div>
                            </div>
                            <ShieldCheck className="text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all w-16 h-16 absolute -right-2 -bottom-2" />
                            <Microscope className="text-white w-10 h-10 relative z-10" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;