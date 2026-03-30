import React from 'react';
import { Pill, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-white mb-4">
                            <Pill className="w-6 h-6 text-primary" />
                            <span className="text-xl font-bold">Ribbon Pharma</span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Innovating health solutions for a better tomorrow. We are committed to global standards of quality and excellence in pharmaceuticals.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <SocialIcon Icon={Facebook} />
                            <SocialIcon Icon={Twitter} />
                            <SocialIcon Icon={Instagram} />
                            <SocialIcon Icon={Linkedin} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Products</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/products?cat=tablets" className="hover:text-primary transition-colors">Tablets & Capsules</Link></li>
                            <li><Link to="/products?cat=syrups" className="hover:text-primary transition-colors">Syrups & Suspensions</Link></li>
                            <li><Link to="/products?cat=injectables" className="hover:text-primary transition-colors">Injectables</Link></li>
                            <li><Link to="/products?cat=ointments" className="hover:text-primary transition-colors">Ointments</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>123 Medical Park, Pharmacy Blvd, Mumbai, India - 400001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@ribbonpharma.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Ribbon Pharma. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ Icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
        <Icon size={18} />
    </a>
);

export default Footer;
