import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
    return (
        <div className="h-full flex flex-col justify-between space-y-8">
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-blue-600 font-black tracking-widest text-xs uppercase mb-4"
                >
                    <Zap size={14} className="fill-current" />
                    Support Terminal
                </motion.div>
                <h2 className="text-5xl max-[376px]:text-5xl max-[321px]:text-4xl font-black text-slate-900 leading-tight mb-6">
                    Let’s Start a <span className="text-blue-600">Dialogue.</span>
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider">Live Support Active</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <InfoCard 
                    icon={MapPin}
                    title="Global HQ"
                    content="Ribbon Pharma House, 123 Blvd"
                    sub="Navi Mumbai, MH 400706"
                    color="text-blue-600"
                />
                <InfoCard 
                    icon={Phone}
                    title="Direct Line"
                    content="+91 98765 43210"
                    sub="Emergency Support 24/7"
                    color="text-indigo-600"
                />
                <InfoCard 
                    icon={Mail}
                    title="Electronic Mail"
                    content="enquiry@ribbonpharma.com"
                    sub="Response within 120 mins"
                    color="text-purple-600"
                />
            </div>
            
            <div className="p-6 bg-slate-900 rounded-[2rem] text-white flex items-center justify-between overflow-hidden relative">
                <div className="relative z-10">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-1">Security Protocol</p>
                    <p className="font-bold text-lg">End-to-End Encrypted</p>
                </div>
                <ShieldCheck size={48} className="text-white/10 absolute -right-2 -bottom-2" />
                <ShieldCheck size={32} className="text-blue-500 relative z-10" />
            </div>
        </div>
    );
};

const InfoCard = ({ icon: Icon, title, content, sub, color }) => (
    <motion.div 
        whileHover={{ x: 10 }}
        className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6"
    >
        <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white ${color}`}>
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</h3>
            <p className="text-lg max-[376px]:text-base max-[321px]:text-sm font-bold text-slate-900">{content}</p>
            <p className="text-sm text-slate-500 font-medium">{sub}</p>
        </div>
    </motion.div>
);

export default ContactInfo;