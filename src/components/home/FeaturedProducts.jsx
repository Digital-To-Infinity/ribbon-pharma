import { motion } from 'framer-motion';
import { ArrowRight, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from "../products/ProductCard";
import { products } from '../../data/products';

const FEATURED_IDS = ['RN-001', 'RN-004', 'RN-006', 'RN-008'];
const FEATURED_DATA = products.filter(p => FEATURED_IDS.includes(p.id));

const FeaturedProducts = () => {
    return (
        <section className="py-24 max-[769px]:py-16 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col min-[770px]:flex-row justify-between items-start min-[770px]:items-end mb-12 max-[769px]:mb-6 gap-6">
                    <div className="max-w-2xl w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-sm mb-4"
                        >
                            <Beaker size={18} />
                            Our Formulations
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}

                            className="text-5xl max-[769px]:text-4xl max-[321px]:text-3xl font-black text-slate-900 leading-tight break-words"
                        >
                            Featured <span className="text-blue-600">Pharmaceutical</span> Products
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="hidden min-[770px]:block"
                    >
                        <Link
                            to="/products"
                            className="group flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm hover:shadow-lg"
                        >
                            View All Products
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURED_DATA.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            delay={index}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center min-[770px]:hidden">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-blue-600 font-bold"
                    >
                        Browse Full Catalog <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;