import { useState, useEffect } from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { useSearchParams } from 'react-router-dom';
import { products, CATEGORIES } from '../data/products';



const Products = () => {
    const [searchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const cat = searchParams.get('cat');
        if (cat && CATEGORIES.map(c => c.toLowerCase()).includes(cat.toLowerCase())) {
            // Find the matching case-sensitive category
            const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
            if (match) setActiveCategory(match);
        }
    }, [searchParams]);

    const filteredProducts = products.filter((product) => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.composition.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-slate-50 min-h-screen max-[769px]:-mt-3">
            <PageHeader
                title="Our Products"
                subtitle="Explore our wide range of pharmaceutical formulations."
                image="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2079&q=80"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <ProductFilter
                    categories={CATEGORIES}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} delay={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-bold text-slate-400">No products found</h3>
                        <p className="text-slate-400">Try adjusting your search or filters.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Products;
