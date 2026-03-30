import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen max-[769px]:-mt-3">
            <PageHeader
                title="Connect with Us"
                subtitle="Bridging the gap between our expertise and your enquiries."
                image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=2070"
            />

            <section className="relative py-24 px-4 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-60" />

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        
                        {/* Left Side: Modern Info Hub */}
                        <div className="w-full lg:w-5/12">
                            <ContactInfo />
                        </div>

                        {/* Right Side: The Glass Terminal Form */}
                        <div className="w-full lg:w-7/12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stylized Map Section */}
            <section className="relative h-[500px] w-full mt-12 overflow-hidden px-4 mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7963737248165!2d73.064117!3d19.030883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzUxLjEiTiA3M8KwMDMnNTAuOCJF!5e0!3m2!1sen!2sin!4v1639561234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="grayscale contrast-125 brightness-110 hover:grayscale-0 transition-all duration-1000"
                    ></iframe>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;