import { motion } from 'framer-motion';
import { Leaf, Recycle, HeartPulse, GraduationCap, CheckCircle } from 'lucide-react';

const Sustainability = () => {
    const initiatives = [
        { text: "Eco-friendly production processes", icon: Leaf },
        { text: "Waste management and pollution control", icon: Recycle },
        { text: "Healthcare awareness in rural communities", icon: HeartPulse },
        { text: "Patient education & disease awareness drives", icon: GraduationCap },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#020617] py-20 max-[426px]:py-10 px-6 overflow-hidden">

            {/* --- Background Elements --- */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* --- Left Side: High-Impact Visual --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative group"
                >
                    {/* Animated Glow behind the image */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-[40px] z-0"
                    />

                    <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
                            alt="Sustainability"
                            className="w-full h-[600px] max-[426px]:h-[400px] max-[376px]:h-[300px] object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                        {/* Floating Statistic Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 max-[376px]:bottom-6 left-8 max-[376px]:left-6 p-6 max-[376px]:p-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl"
                        >
                            <div className="text-emerald-400 text-3xl font-black">100%</div>
                            <div className="text-white/70 text-sm font-mono uppercase tracking-widest">Ethical Sourcing</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* --- Right Side: Content Card --- */}
                <div className="space-y-10">
                    <header>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 text-emerald-400 font-mono text-sm mb-4 tracking-[0.2em] uppercase"
                        >
                            <span className="w-8 h-[1px] bg-emerald-400"></span>
                            Social Responsibility
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-6xl max-[426px]:text-4xl max-[321px]:text-3xl font-black text-white leading-tight"
                        >
                            Sustainability <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                & Responsibility
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-400 text-lg max-[376px]:text-base mt-6 leading-relaxed max-w-xl"
                        >
                            We are not only dedicated to patients but also committed to environmental stewardship and the communities we serve.
                        </motion.p>
                    </header>

                    {/* Initiatives List */}
                    <div className="grid gap-4">
                        {initiatives.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                whileHover={{ x: 10 }}
                                className="group flex items-center gap-5 max-[376px]:gap-3 p-5 max-[376px]:p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                    <item.icon size={24} />
                                </div>
                                <span className="text-slate-200 text-lg max-[376px]:text-base max-[321px]:text-sm font-semibold tracking-tight group-hover:text-white">
                                    {item.text}
                                </span>
                                <CheckCircle className="ml-auto opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity" size={20} />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Sustainability;