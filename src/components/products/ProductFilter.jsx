import { Search } from 'lucide-react';

const ProductFilter = ({
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery
}) => {
    return (
        <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
                <input
                    type="text"
                    placeholder="Search for products, composition..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm text-lg"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 max-[376px]:gap-2">
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-6 max-[321px]:px-3 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'All'
                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                            : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                        }`}
                >
                    All Products
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 max-[321px]:px-3 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductFilter;
