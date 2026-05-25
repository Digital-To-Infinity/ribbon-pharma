import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Package, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import PageHeader from '../components/ui/PageHeader';
import { useEnquiry } from '../context/EnquiryContext';

const ProductDetails = () => {
    const { slug } = useParams();
    const product = products.find(p => p.slug === slug);
    const { openEnquiry } = useEnquiry();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
                <Link to="/products" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen max-[769px]:-mt-3">
            <PageHeader
                title={product.name}
                subtitle={product.composition}
                breadcrumb="Products"
            />

            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Breadcrumb / Back Button */}
                    <Link
                        to="/products"
                        className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                        Back to Products
                    </Link>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className={`grid grid-cols-1 ${product.image ? 'lg:grid-cols-2' : ''} gap-0`}>

                            {/* Image Section */}
                            {product.image && (
                                <div className="p-8 bg-slate-50/50 flex items-center justify-center h-full min-h-[400px] max-[376px]:min-h-[300px]">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-white"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-sm border border-slate-100">
                                            {product.category}
                                        </div>
                                    </motion.div>
                                </div>
                            )}

                            {/* Details Section */}
                            <div className="p-8 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <h1 className="text-3xl sm:text-4xl max-[376px]:text-3xl max-[321px]:text-2xl font-bold text-slate-900">{product.name}</h1>
                                        {!product.image && (
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold border border-primary/20">
                                                {product.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium mb-6">
                                        {product.composition}
                                    </div>

                                    <div className="flex items-center gap-6 max-[376px]:gap-2 mb-8 pb-8 border-b border-slate-100">
                                        <div>
                                            <p className="text-slate-500 text-sm mb-1">Price</p>
                                            <p className="text-3xl max-[321px]:text-xs font-bold text-slate-800">{product.price}</p>
                                        </div>
                                        <div className="h-10 w-px bg-slate-200"></div>
                                        <div>
                                            <p className="text-slate-500 text-sm mb-1">Pack Size</p>
                                            <div className="flex items-center text-slate-700 font-medium">
                                                <Package size={20} className="mr-2 text-slate-400" />
                                                {product.quantity}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                                            <Info size={20} className="mr-2 text-primary" />
                                            Description
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => openEnquiry(product)}
                                            className="flex-1 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 active:scale-[0.98]"
                                        >
                                            Enquiry Now
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Products Section */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-slate-800 mb-8">Recommended Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products
                                .filter(p => p.category === product.category && p.id !== product.id)
                                .slice(0, 4)
                                .map((relatedProduct, index) => (
                                    <ProductCard key={relatedProduct.id} product={relatedProduct} delay={index} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
