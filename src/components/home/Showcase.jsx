import { useState } from 'react';
import { motion } from 'framer-motion';
import { Venus, Bone, Baby, Stethoscope, CheckCircle2, ShieldCheck, Activity, Microscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Data ---
const specializations = [
    { id: 1, title: "Gynecology", desc: "Advanced formulations for reproductive care & PCOS.", icon: Venus, accent: "from-pink-400 to-rose-500" },
    { id: 2, title: "Orthopedics", desc: "Innovative solutions for bone strength & joint mobility.", icon: Bone, accent: "from-blue-400 to-indigo-500" },
    { id: 3, title: "Pediatrics", desc: "Trusted medicines ensuring better health for children.", icon: Baby, accent: "from-emerald-400 to-teal-500" },
    { id: 4, title: "Physician Care", desc: "Holistic therapies for chronic and acute conditions.", icon: Stethoscope, accent: "from-violet-400 to-purple-500" }
];

const trustPoints = [
    "Global quality benchmarks trusted by doctors.",
    "Rigorous testing for safety and efficacy.",
    "Continuous technology upgrades."
];

// The Holographic Scanner Card
const HoloSpecCard = ({ spec, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 50 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-white h-full p-8 rounded-2xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
        >
            {/* Technical Border drawn on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-slate-200 transition-colors duration-500"></div>

            {/* The "Scanner Bar" Animation */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={isHovered ? { x: '200%' } : { x: '-100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={`absolute inset-0 w-1/2 h-full -skew-x-12 bg-gradient-to-r ${spec.accent} opacity-20 blur-md z-0 pointer-events-none`}
            />

            {/* The revealed technical grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Animated Icon Header */}
                <div className="flex justify-between items-start mb-6">
                    <motion.div
                        animate={isHovered ? { rotateY: 360, scale: 1.1 } : { rotateY: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${spec.accent} p-[2px]`}
                    >
                        <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                            <spec.icon className={`w-8 h-8 text-slate-700 group-hover:bg-clip-text group-hover:bg-gradient-to-r ${spec.accent} transition-all duration-500`} />
                        </div>
                    </motion.div>
                    <Activity className="text-slate-200 group-hover:text-slate-400 transition-colors" size={20} />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-800 mb-4 group-hover:translate-x-2 transition-transform duration-300">{spec.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed flex-grow">
                    {spec.desc}
                </p>

                {/* Technical Footer readout */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-400 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                    <span>STATUS: ACTIVE</span>
                    <span>ID: SPEC-0{spec.id}</span>
                </div>
            </div>
        </motion.div>
    );
};

// The Circuit Trust Point
const CyberTrustPoint = ({ text, index }) => {
    const isEven = index % 2 === 0;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
            className={`flex items-center gap-6 relative ${isEven ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}
        >
            {/* Animated Connecting Line (SVG) */}
            {index < trustPoints.length - 1 && (
                <svg className="absolute top-8 left-6 h-24 w-2 z-0 hidden md:block" viewBox="0 0 2 100">
                    <motion.line
                        x1="1" y1="0" x2="1" y2="100"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        strokeDasharray="10 5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: (index * 0.3) + 0.5 }}
                    />
                </svg>
            )}

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: index * 0.3 }}
                className="relative z-10 w-12 max-[376px]:w-10 h-12 max-[376px]:h-10 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center shrink-0"
            >
                <CheckCircle2 className="text-blue-600 w-6 max-[376px]:w-5 h-6 max-[376px]:h-5" />
            </motion.div>
            <div className={`bg-white p-6 max-[376px]:p-4 rounded-2xl shadow-sm border border-slate-100 flex-grow relative overflow-hidden group hover:border-blue-200 transition-colors duration-300`}>
                <div className="absolute right-0 top-0 w-2 h-full bg-blue-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>
                <p className="text-slate-700 font-bold text-lg max-[376px]:text-base max-[321px]:text-sm">{text}</p>
            </div>
        </motion.div>
    )
}


// --- Main Component ---
const Showcase = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-blue-100">

            {/* --- The Digital Lab (Specializations) --- */}
            <section className="py-14 px-6 relative">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <Microscope className="absolute top-10 left-[-100px] text-slate-200/50 w-96 h-96 rotate-12" />
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply"></div>
                    <div className="absolute bottom-0 left-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-bold mb-6 font-mono"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            CLINICAL FOCUS AREAS
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-5xl md:text-7xl max-[321px]:text-4xl font-black text-slate-900 tracking-tight mb-6"
                        >
                            Precision <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-blue-600 before:opacity-10 relative"><span className="relative text-blue-600">Medicine.</span></span>
                        </motion.h2>
                        <p className="text-slate-600 text-xl max-w-2xl max-[376px]:text-lg max-[321px]:text-base mx-auto leading-relaxed">
                            Targeted therapeutic solutions developed through advanced R&D.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:h-[350px]">
                        {specializations.map((spec, i) => (
                            <HoloSpecCard key={i} spec={spec} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- The Network (Global Standards) --- */}
            <section className="py-24 max-[769px]:py-16 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content - The Circuit */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl max-[321px]:text-3xl font-extrabold text-slate-900 mb-12"
                        >
                            The <span className="text-blue-600">Ribbon Trust</span> Network.
                        </motion.h2>
                        <div className="flex flex-col gap-8 pl-4 md:pl-0">
                            {trustPoints.map((text, i) => (
                                <CyberTrustPoint key={i} text={text} index={i} />
                            ))}
                        </div>
                        <motion.button
                            onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.02, backgroundColor: '#2563eb' }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-12 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl flex items-center gap-3 group transition-all"
                        >
                            <ShieldCheck size={20} className="group-hover:rotate-12 transition-transform" />
                            Verify Our Compliance
                        </motion.button>
                    </div>

                    {/* Right Content - Asymmetrical Image Composition */}
                    <div className="relative h-[600px]">
                        {/* Main Image */}
                        <motion.div
                            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            transition={{ duration: 1, ease: 'circOut' }}
                            className="absolute top-0 right-0 w-4/5 h-4/5 max-[426px]:h-3/5 rounded-[40px] overflow-hidden z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
                                alt="Lab"
                                className="w-full h-full object-cover mix-blend-overlay opacity-80 hover:scale-110 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
                            {/* Data Overlay */}
                            <div className="absolute bottom-8 left-8 text-white font-mono text-sm">
                                <div>DATA STREAM: LIVE</div>
                                <div className="h-1 w-24 bg-blue-400 mt-2 animate-pulse"></div>
                            </div>
                        </motion.div>

                        {/* Secondary Floating Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.8 }}
                            whileInView={{ opacity: 10, y: 0, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute bottom-0 max-[426px]:bottom-20 left-0 w-3/5 h-3/5 max-[426px]:h-2/5 bg-white p-4 rounded-[30px] shadow-2xl z-20"
                        >
                            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
                                    alt="Pharmacist"
                                    className="w-full h-full object-cover"
                                />
                                {/* Animated scan line on the image itself */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-30"
                                />
                            </div>
                        </motion.div>
                        {/* Decorative geometric element */}
                        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-slate-100 rounded-full -z-10 animate-spin-slow"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Showcase;