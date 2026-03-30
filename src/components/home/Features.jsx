import { motion } from 'framer-motion';
import { ShieldCheck, Search, Users2, Briefcase, HeartHandshake, Beaker } from 'lucide-react';
import pillsBg from "../../assets/pills.jpg";

const Features = () => {
    const featureData = [
        {
            id: "01",
            icon: ShieldCheck,
            title: "Proven Legacy of Trust",
            desc: "Backed by ACCESS LIFE SCIENCE, our parent company with years of excellence in pharmaceutical innovation.",
            color: "from-blue-400 to-blue-600",
        },
        {
            id: "02",
            icon: Search,
            title: "Strong Research Backbone",
            desc: "A robust pipeline of innovative products developed by our dedicated in-house R&D experts.",
            color: "from-cyan-400 to-blue-500",
        },
        {
            id: "03",
            icon: Users2,
            title: "Dedicated Workforce",
            desc: "We invest in the continuous growth and motivation of our employees to build a stronger healthcare foundation.",
            color: "from-indigo-400 to-blue-600",
        },
        {
            id: "04",
            icon: Briefcase,
            title: "Diverse Product Portfolio",
            desc: "From women's health to pediatric care, we provide specialized therapeutic solutions for every life stage.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: "05",
            icon: HeartHandshake,
            title: "Customer-First Philosophy",
            desc: "Our business is built on transparency, ethical practices, and a highly reliable global supply chain.",
            color: "from-blue-600 to-indigo-600",
        }
    ];

    return (
        <section className="relative w-full py-24 max-[769px]:py-16 max-[321px]:py-8 overflow-hidden">
            {/* Background Layer - Kept as requested */}
            <div className="absolute inset-0 z-0">
                <img
                    src={pillsBg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Impressive Header */}
                <div className="flex flex-col md:flex-row items-end max-[426px]:items-start justify-between mb-20 max-[426px]:mb-10 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-blue-400 font-mono text-sm tracking-widest uppercase mb-4"
                        >
                            <Beaker size={16} />
                            Foundation of Excellence
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl max-[321px]:text-4xl font-black text-white tracking-tighter"
                        >
                            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Ribbon.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-400 text-lg max-[321px]:text-base font-medium max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-500 px-4"
                    >
                        Bridging the gap between cutting-edge science and compassionate patient care.
                    </motion.p>
                </div>

                {/* Staggered Molecular Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
                    {/* First Row */}
                    <div className="md:col-span-3 lg:col-span-4">
                        <FeatureCard item={featureData[0]} index={0} />
                    </div>
                    <div className="md:col-span-3 lg:col-span-4 mt-0 md:mt-12">
                        <FeatureCard item={featureData[1]} index={1} />
                    </div>
                    <div className="md:col-span-6 lg:col-span-4">
                        <FeatureCard item={featureData[2]} index={2} />
                    </div>

                    {/* Second Row Staggered */}
                    <div className="md:col-span-3 lg:col-span-2 hidden lg:block"></div>
                    <div className="md:col-span-3 lg:col-span-4">
                        <FeatureCard item={featureData[3]} index={3} />
                    </div>
                    <div className="md:col-span-3 lg:col-span-4 mt-0 md:mt-[-48px]">
                        <FeatureCard item={featureData[4]} index={4} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative h-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 max-[426px]:p-4 rounded-[2.5rem] hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500"
    >
        {/* Transparent ID Watermark */}
        <span className="absolute top-6 right-8 text-5xl max-[321px]:text-4xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors">
            {item.id}
        </span>

        <div className="relative z-10">
            {/* Icon with animated glow */}
            <div className={`w-16 max-[321px]:w-12 h-16 max-[321px]:h-12 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${item.color} shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-500`}>
                <item.icon size={30} className="text-white" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl max-[321px]:text-lg font-bold text-white mb-4 tracking-tight group-hover:text-blue-300 transition-colors">
                {item.title}
            </h3>

            <p className="text-slate-400 max-[321px]:text-sm leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                {item.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-8 max-[426px]:mt-2 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-700 rounded-full" />
        </div>
    </motion.div>
);

export default Features;