import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, Menu, X, ChevronRight, FlaskConical, Home, User2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: User2 },
        { name: 'Products', path: '/products', icon: FlaskConical },
    ];

    return (
        <>
            {/* MAIN NAVIGATION BAR */}
            <nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                        ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3'
                        : 'bg-transparent py-5 max-[769px]:bg-white max-[769px]:py-3 max-[769px]:shadow-md'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between">

                        {/* Brand Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-[360deg] transition-transform duration-700">
                                <Pill className="text-white w-6 h-6 rotate-45" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                                    Ribbon<span className="text-blue-600">Pharma</span>
                                </span>
                                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-blue-600 leading-none">
                                    EXCELLENCE_IN_CARE
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden min-[770px]:flex items-center gap-10">
                            <div className="flex items-center gap-8">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`relative text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                                }`}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>

                            <Link
                                to="/contact"
                                className="relative overflow-hidden group px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-blue-500/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Contact Us <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="min-[770px]:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE SIDEBAR */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[110] min-[770px]:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute inset-y-0 right-0 w-full max-[426px]:w-2/3 max-w-sm bg-white shadow-2xl p-10 max-[426px]:p-6 max-[376px]:p-4 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <span className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase">Navigation</span>
                                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-900">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, idx) => {
                                    const isActive = location.pathname === link.path;
                                    const Icon = link.icon;
                                    return (
                                        <Link
                                            key={idx}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between py-2 group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                                                    <Icon size={20} />
                                                </div>
                                                <span className={`text-xl max-[426px]:text-lg max-[321px]:text-base font-black tracking-tight transition-colors ${isActive ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                                                    }`}>
                                                    {link.name}
                                                </span>
                                            </div>
                                            {isActive && <motion.div layoutId="mobileActive" className="w-2 h-2 bg-blue-600 rounded-full" />}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="mt-auto pt-10 border-t border-slate-100 text-center">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest max-[426px]:tracking-normal mb-6">Need help? Contact us</p>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-5 max-[426px]:py-4 max-[321px]:py-3 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20"
                                >
                                    Contact Us <ChevronRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;