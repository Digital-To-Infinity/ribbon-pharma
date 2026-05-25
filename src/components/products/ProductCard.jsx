import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, FlaskConical } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

const ProductCard = ({ product, delay }) => {
    const { openEnquiry } = useEnquiry();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.05 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
        >
            <Link to={`/product/${product.slug}`} className="block relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-50 group">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 text-slate-400 group-hover:from-slate-100 group-hover:to-slate-200 transition-colors">
                        {product.category === 'Tablets' ? (
                            <Pill size={48} className="text-primary/40 mb-2" />
                        ) : (
                            <FlaskConical size={48} className="text-primary/40 mb-2" />
                        )}
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {product.category}
                        </span>
                    </div>
                )}

                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Details
                    </span>
                </div>

                {product.image && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm z-10">
                        {product.category}
                    </div>
                )}
            </Link>

            <div className="space-y-2">
                <Link to={`/product/${product.slug}`} className="block">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                </Link>
                <p className="text-slate-500 text-sm line-clamp-2">{product.composition}</p>

                <div className="pt-4 flex items-center justify-end">
                    <button
                        onClick={() => openEnquiry(product)}
                        className="flex items-center text-primary font-medium text-sm group-hover:underline decoration-2 underline-offset-4"
                    >
                        Enquiry Now
                        <ArrowRight
                            size={16}
                            className="ml-1 transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
