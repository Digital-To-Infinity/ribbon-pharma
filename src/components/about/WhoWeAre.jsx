import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, History, Microscope, FlaskConical } from 'lucide-react';

const WhoWeAre = () => {
    const containerRef = useRef(null);
    
    // Parallax effects for floating elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

    return (
        <section ref={containerRef} className="relative py-32 max-[769px]:py-16 bg-slate-50 overflow-hidden">
            {/* Background Watermark Text */}
            <div className="absolute top-10 left-0 text-[15rem] font-black text-slate-200/40 select-none pointer-events-none tracking-tighter">
                RIBBON
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left Side: The Interactive Image Stack */}
                    <div className="relative h-[600px] max-[769px]:h-[450px] max-[426px]:h-[400px] max-[376px]:h-[350px] max-[321px]:h-[300px] w-full">
                        {/* Main Image Container */}
                        <motion.div 
                            style={{ y: y2 }}
                            className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" 
                                alt="Medical Professional" 
                                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                        {/* Floating Card 1: ISO Certification */}
                        <motion.div 
                            style={{ y: y1, rotate: -5 }}
                            className="absolute top-10 -left-10 max-[426px]:-left-7 z-20 backdrop-blur-xl bg-white/80 p-6 max-[426px]:p-3 rounded-3xl shadow-xl border border-white max-w-[200px]"
                        >
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30">
                                <ShieldCheck className="text-white" size={24} />
                            </div>
                            <h4 className="font-black text-slate-900 text-sm max-[426px]:text-xs mb-1 uppercase tracking-wider">ISO 9001:2008</h4>
                            <p className="text-xs max-[426px]:text-xs text-slate-500 font-medium leading-relaxed">System certified to international standards of excellence.</p>
                        </motion.div>

                        {/* Floating Card 2: Research Focus */}
                        <motion.div 
                            style={{ y: y2, x: 20 }}
                            className="absolute -bottom-10 -right-10 z-20 bg-slate-900 p-8 max-[426px]:p-4 rounded-[2.5rem] shadow-2xl text-white max-w-[260px]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                    <Microscope size={24} />
                                </div>
                                <span className="text-xs font-mono text-blue-400 tracking-tighter">PHARMA_TECH v2.0</span>
                            </div>
                            <p className="text-lg max-[426px]:text-sm font-bold leading-tight">
                                High-quality <span className="text-blue-400">research-based</span> formulations.
                            </p>
                        </motion.div>

                        {/* Decorative Circle */}
                        <motion.div 
                            style={{ rotate }}
                            className="absolute -top-20 -right-20 w-64 h-64 border-[30px] border-blue-500/5 rounded-full z-[-1]"
                        />
                    </div>

                    {/* Right Side: Stepped Content Narrative */}
                    <div className="flex flex-col gap-12">
                        <header>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-bold mb-6 tracking-widest"
                            >
                                <FlaskConical size={14} />
                                ESTABLISHED LEGACY
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl max-[376px]:text-4xl font-black text-slate-900 leading-[1.1]"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Who</span> We Are.
                            </motion.h2>
                        </header>

                        <div className="space-y-12">
                            {/* Point 1 */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-6 group"
                            >
                                <div className="h-12 w-1 w-1 bg-slate-200 group-hover:bg-blue-600 transition-colors rounded-full" />
                                <div>
                                    <p className="text-xl max-[769px]:text-lg text-slate-600 leading-relaxed">
                                        <span className="font-black text-slate-900">Explore Pharmaceutical India Private Limited</span> is a new-age pharmaceutical powerhouse built on the robust foundation of ACCESS LIFE SCIENCE.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Point 2 */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-6 group"
                            >
                                <div className="h-12 w-1 w-1 bg-slate-200 group-hover:bg-blue-600 transition-colors rounded-full" />
                                <div>
                                    <p className="text-xl max-[769px]:text-lg text-slate-600 leading-relaxed">
                                        We embrace <span className="font-black text-slate-900 text-blue-600 underline decoration-blue-100 underline-offset-8">Innovation and Ethics</span> as our core pillars, striving to be the most trusted name in global patient care.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats/Foundation Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="pt-10 flex items-center gap-8 border-t border-slate-200"
                        >
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-slate-900">2008</span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Year of Origin</span>
                            </div>
                            <div className="h-10 w-px bg-slate-200" />
                            <div className="flex items-center gap-3">
                                <History className="text-blue-600" size={20} />
                                <span className="text-sm font-bold text-slate-600">Built on Decades of Expertise</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;