import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Eye, Heart, Sparkles, Globe, Shield } from 'lucide-react';

// --- Interactive 3D Tilt Card ---
const TiltCard = ({ children, color }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative min-h-[320px] h-full w-full"
        >
            <div
                style={{ transform: "translateZ(75px)" }}
                className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
            />
            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative h-full w-full rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/40 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between group"
            >
                {/* Background Scanning Animation */}
                <motion.div
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-blue-500/10 z-0"
                />
                {children}
            </div>
        </motion.div>
    );
};

const Values = () => {
    const data = [
        {
            icon: Target,
            title: "Our Mission",
            desc: "Providing accessible, high-quality pharmaceutical solutions that improve patient lives globally.",
            color: "from-blue-400 to-indigo-600",
            accent: "text-blue-600",
            bg: "bg-blue-50",
            tag: "ACCESSIBILITY"
        },
        {
            icon: Eye,
            title: "Our Vision",
            desc: "Setting global benchmarks for pharmaceutical innovation and compassionate care.",
            color: "from-cyan-400 to-blue-500",
            accent: "text-cyan-600",
            bg: "bg-cyan-50",
            tag: "INNOVATION"
        },
        {
            icon: Heart,
            title: "Our Values",
            desc: "Integrity, Innovation, and Inclusivity are the heartbeat of Ribbon Pharma.",
            color: "from-purple-400 to-pink-500",
            accent: "text-purple-600",
            bg: "bg-purple-50",
            tag: "ETHICS"
        }
    ];

    return (
        <section id="values" className="py-24 max-[769px]:py-16 bg-slate-50 relative overflow-hidden scroll-mt-24">
            {/* Background Molecular Shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <Sparkles className="absolute top-20 left-10 text-blue-200" size={120} />
                <Globe className="absolute bottom-20 right-10 text-slate-200" size={200} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 max-[321px]:px-3 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-100 rounded-full"
                    >
                        Foundation of Excellence
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-6xl max-[376px]:text-3xl max-[321px]:text-2xl font-black text-slate-900"
                    >
                        Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-black">Purpose.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-[769px]:gap-6">
                    {data.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <TiltCard color={item.color}>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start">
                                        <div className={`w-16 h-16 ${item.bg} ${item.accent} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                                            <item.icon size={32} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <div className="mt-auto">
                                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                                            {item.title.split(' ')[1]}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>

                                        {/* Minimalist interactive arrow */}
                                        <div className={`mt-8 flex items-center gap-2 text-sm font-bold ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                            Learn Our Story <Shield size={14} />
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;