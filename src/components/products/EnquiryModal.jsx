import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, MessageSquare, Package, Tag, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const EnquiryModal = ({ isOpen, onClose, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // NOTE: Update the URL if your backend is hosted elsewhere
            const response = await fetch('https://mediumturquoise-zebra-229193.hostingersite.com/enquiry.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    productName: product.name,
                    productPrice: product.price
                }),
            });

            const result = await response.json();

            if (result.status === 'success') {
                setIsSubmitted(true);
                // Reset and close after a delay
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', mobile: '', message: '' });
                    onClose();
                }, 3000);
            } else {
                alert(result.message || 'Failed to send enquiry.');
            }
        } catch (error) {
            console.error('Error submitting enquiry:', error);
            alert('Error connecting to server. Please ensure the PHP backend is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Check if required fields are filled
    const isValid = formData.name?.trim() && formData.mobile?.trim();

    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={!isSubmitting ? onClose : null}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center"
                    >
                        {isSubmitted ? (
                            /* SUCCESS VIEW - This replaces everything */
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center justify-center text-center p-12 space-y-6"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
                                >
                                    <CheckCircle2 size={56} strokeWidth={2.5} />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-slate-900">Enquiry Sent!</h3>
                                    <p className="text-slate-500 text-lg max-w-[300px]">
                                        Your message for <b>{product.name}</b> has been received. Our team will contact you shortly.
                                    </p>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-4"
                                >
                                    Closing automatically...
                                </motion.div>
                            </motion.div>
                        ) : (
                            /* DEFAULT FORM VIEW */
                            <div className="w-full flex flex-col max-h-[90vh]">
                                {/* Header */}
                                <div className="px-8 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Quick Enquiry</h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4 pt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                                        {/* Product Info Column */}
                                        <div className="space-y-6">
                                            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-inner">
                                                <img
                                                    src={product.image || "https://images.unsplash.com/photo-1584308666741-febe530570c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                                                    <p className="text-blue-600 font-bold text-sm mt-1 uppercase tracking-wider">{product.composition}</p>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                        <p className="text-[10px] text-slate-400 mb-1 flex items-center uppercase tracking-widest font-black">
                                                            <Tag size={12} className="mr-1" /> Price
                                                        </p>
                                                        <p className="text-lg font-black text-slate-900">{product.price || 'On Request'}</p>
                                                    </div>
                                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                        <p className="text-[10px] text-slate-400 mb-1 flex items-center uppercase tracking-widest font-black">
                                                            <Package size={12} className="mr-1" /> Pack
                                                        </p>
                                                        <p className="text-sm font-bold text-slate-900">{product.quantity || 'Standard'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Form Column */}
                                        <form onSubmit={handleSubmit} className="space-y-5 border-slate-100">
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Full Name *</label>
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                                            <User size={18} />
                                                        </div>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="John Doe"
                                                            className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-medium"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Mobile Number *</label>
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                                            <Phone size={18} />
                                                        </div>
                                                        <input
                                                            required
                                                            type="tel"
                                                            name="mobile"
                                                            value={formData.mobile}
                                                            onChange={handleChange}
                                                            placeholder="+91 00000 00000"
                                                            className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-medium"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Your Message</label>
                                                    <div className="relative group">
                                                        <div className="absolute top-3.5 left-4 pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                                            <MessageSquare size={18} />
                                                        </div>
                                                        <textarea
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            rows="4"
                                                            placeholder="Interested in bulk purchase..."
                                                            className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none font-medium resize-none"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                disabled={isSubmitting || !isValid}
                                                type="submit"
                                                className={`w-full flex items-center justify-center gap-3 py-3 px-6 rounded-2xl font-black text-white transition-all shadow-lg active:scale-[0.98] ${isSubmitting || !isValid
                                                        ? 'bg-slate-400 cursor-not-allowed'
                                                        : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Send Enquiry
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;