import { useState } from 'react';
import { Send, CheckCircle, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // NOTE: Update the URL if your backend is hosted elsewhere
            const response = await fetch('https://mediumturquoise-zebra-229193.hostingersite.com/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.status === 'success') {
                setStatus('success');
                setFormData({ name: '', mobile: '', email: '', subject: '', message: '' });
            } else {
                console.error('Submission failed:', result.message);
                setStatus('idle');
                alert(result.message || 'Failed to send message.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('idle');
            alert('Error connecting to server. Please ensure the PHP backend is running.');
        }
    };

    // Check if required fields are filled
    const isValid = formData.name?.trim() && formData.mobile?.trim();

    return (
        <div className="relative group">
            {/* Animated Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-white/80 backdrop-blur-2xl p-8 max-[376px]:p-4 rounded-[3rem] border border-white shadow-2xl overflow-hidden">

                {/* Form Progress Indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: status === 'sending' ? '100%' : '0%' }}
                        className="h-full bg-blue-600"
                    />
                </div>

                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="py-20 text-center"
                        >
                            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <CheckCircle size={48} />
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Transmission Received</h3>
                            <p className="text-slate-500 font-medium text-lg max-w-xs mx-auto mb-10">
                                Your data has been encrypted and sent to our primary medical desk.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors"
                            >
                                New Transmission
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            onSubmit={handleSubmit}
                            className="space-y-8"
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Data Entry</h3>
                                    <p className="text-slate-400 text-sm font-mono">ENQUIRY_LOG_v2.0</p>
                                </div>
                                <Fingerprint className="text-slate-200" size={40} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FloatingInput
                                    label="Full Name *"
                                    placeholder="Enter identifier"
                                    value={formData.name}
                                    required
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <FloatingInput
                                    label="Mobile Number *"
                                    placeholder="8923679043"
                                    value={formData.mobile}
                                    required
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />
                            </div>

                            <FloatingInput
                                label="Email Address"
                                placeholder="your@network.com"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />

                            <FloatingInput
                                label="Subject"
                                placeholder="Nature of enquiry"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />

                            <div className="relative">
                                <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Detailed Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 outline-none focus:border-blue-600 focus:bg-white transition-all resize-none font-medium text-slate-700"
                                    placeholder="Type your message here..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || !isValid}
                                className={`w-full py-3 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/20 group overflow-hidden relative ${status === 'sending' || !isValid
                                        ? 'bg-slate-300 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-slate-900'
                                    }`}
                            >
                                {status === 'sending' ? (
                                    <span className="animate-pulse">Processing...</span>
                                ) : (
                                    <>
                                        <span>Initialize Sending</span>
                                        <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                    </>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const FloatingInput = ({ label, placeholder, type = "text", value, onChange }) => (
    <div className="relative">
        <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-700 placeholder:text-slate-300"
        />
    </div>
);

export default ContactForm;