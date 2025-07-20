import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory, getProductsBySubcategory, getProductsByPriceRange, getProductsByBrand } from '../data/products';

const Accessories: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products] = useState(getProductsByCategory('accessories'));
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Accessories' },
    { id: 'phone-cases', name: 'Phone Cases' },
    { id: 'chargers', name: 'Chargers' },
    { id: 'audio', name: 'Audio' },
    { id: 'mounts', name: 'Mounts' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under-500', name: 'Under ₹500', min: 0, max: 500 },
    { id: '500-1000', name: '₹500 - ₹1000', min: 500, max: 1000 },
    { id: '1000-2000', name: '₹1000 - ₹2000', min: 1000, max: 2000 },
    { id: '2000-4000', name: '₹2000 - ₹4000', min: 2000, max: 4000 },
    { id: 'above-4000', name: 'Above ₹4000', min: 4000, max: Infinity }
  ];

  const brands = [
    'Falcon Premium',
    'Falcon Defense',
    'Falcon Clear',
    'Falcon Wallet',
    'Falcon Tech',
    'Falcon Power',
    'Falcon Energy',
    'Falcon Auto',
    'Falcon Audio',
    'Falcon Studio',
    'Falcon Sound',
    'Falcon Gaming',
    'Falcon Desk',
    'Falcon Bike'
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'rating', name: 'Rating' }
  ];

  // Handle URL parameters for category filtering
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.find(cat => cat.id === category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Apply all filters
  useEffect(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = getProductsBySubcategory('accessories', selectedCategory);
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      const priceRange = priceRanges.find(range => range.id === selectedPriceRange);
      if (priceRange) {
        filtered = filtered.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
      }
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPriceRange, selectedBrands, sortBy, products]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedBrands([]);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Phone Accessories</h1>
              <p className="text-gray-600 mt-2">
                Enhance your mobile experience with our premium accessories
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.id}
                        checked={selectedPriceRange === range.id}
                        onChange={() => setSelectedPriceRange(range.id)}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-sm">{range.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Brand</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => handleBrandChange(brand, e.target.checked)}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button 
                onClick={clearAllFilters}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and View Options */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-lg bg-blue-600 text-white">
                      <Grid className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Products Found */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button
                  onClick={clearAllFilters}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
                    Previous
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;