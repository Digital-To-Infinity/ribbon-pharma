import { motion } from 'framer-motion';
import { ShieldCheck, Award, Factory, FileCheck } from 'lucide-react';

const Compliance = () => {
    // Data for the certification badges (icons)
    const badges = [
        { name: "FSSAI Certified", icon: ShieldCheck, color: "text-rose-500", bg: "bg-rose-50" },
        { name: "WHO-GMP Practices", icon: Factory, color: "text-amber-600", bg: "bg-amber-50" },
        { name: "World Health Org", icon: Award, color: "text-blue-600", bg: "bg-blue-50" },
        { name: "ISO 9001:2015", icon: FileCheck, color: "text-pink-500", bg: "bg-pink-50" },
    ];

    return (
        <section className="py-24 max-[769px]:py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-4"
                    >
                        Quality Assurance
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl max-[376px]:text-3xl max-[321px]:text-2xl font-black text-slate-900 leading-tight mb-6"
                    >
                        Certified to the <span className="text-blue-600">Highest Standards</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Product Image & Badges */}
                    <div className="space-y-12">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop" 
                                alt="Pharmaceutical Quality" 
                                className="w-full h-80 max-[321px]:h-50 object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                        </motion.div>

                        {/* Interactive Badges Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {badges.map((badge, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-slate-100"
                                >
                                    <div className={`w-12 h-12 rounded-full ${badge.bg} ${badge.color} flex items-center justify-center`}>
                                        <badge.icon size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter text-center">
                                        {badge.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Document Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((doc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                className="relative group aspect-[3/4] max-[426px]:aspect-[4/3] bg-white rounded-xl shadow-lg border border-slate-200 p-2 overflow-hidden cursor-zoom-in"
                            >
                                {/* Placeholder for Certificate Image */}
                                <div className="w-full h-full bg-slate-50 rounded-lg flex items-center justify-center border border-dashed border-slate-300">
                                    <div className="text-center group-hover:scale-110 transition-transform">
                                        <FileCheck className="mx-auto text-slate-300 mb-2" size={32} />
                                        <span className="text-[10px] font-mono text-slate-400">CERTIFICATE_00{doc}</span>
                                    </div>
                                </div>
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Footer Disclaimer/Info */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-16 text-slate-400 italic font-medium"
                >
                    "Our legacy of innovation is built on a compassionate promise toward your radiant health..."
                </motion.p>
            </div>
        </section>
    );
};

export default Compliance;