import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 max-[769px]:-mt-3">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2070&auto=format&fit=crop"
                    alt="Medical Laboratory"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-8xl max-[769px]:text-6xl max-[426px]:text-4xl max-[376px]:text-3xl font-bold text-white mb-6 tracking-tight"
                >
                    Innovating Health for a <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Better Tomorrow
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-xl max-[426px]:text-lg max-[376px]:text-base text-slate-200 mb-10 leading-relaxed max-[426px]:leading-snug"
                >
                    Ribbon Pharma is dedicated to delivering world-class pharmaceutical solutions.
                    We bridge the gap between science and care.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/products"
                        className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                    >
                        View Products
                        <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto px-8 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Ocean-like Waves */}
            {/* <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
                <svg
                    className="relative block w-[calc(100%+1px)] h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <motion.path

                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z"
                        className="fill-white"
                    ></motion.path>
                </svg>
            </div> */}
        </section>
    );
};

export default Hero;