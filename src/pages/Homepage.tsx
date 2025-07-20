import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, HeadphonesIcon, RefreshCw, Star, Smartphone, Users, Package, Globe, TrendingUp, Award, Zap, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts, getNewProducts, getSaleProducts } from '../data/products';

// Hero carousel data
const heroSlides = [
  {
    id: 1,
    title: "Premium Phone Accessories",
    subtitle: "Elevate your mobile experience with our premium cases and accessories",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Shop Accessories",
    link: "/accessories",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 2,
    title: "Modern Men's Fashion",
    subtitle: "Discover contemporary styles for the professional lifestyle",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "Explore Fashion",
    link: "/menswear",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 3,
    title: "Limited Edition Collection",
    subtitle: "Exclusive designs available for a limited time only",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "View Collection",
    link: "/new-arrivals",
    color: "from-cyan-500 to-cyan-700"
  }
];

const Homepage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideInterval = useRef<NodeJS.Timeout>();
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 4);
  const saleProducts = getSaleProducts().slice(0, 4);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
      }, 6000);
    }
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (slideInterval.current) clearInterval(slideInterval.current);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    if (slideInterval.current) clearInterval(slideInterval.current);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    if (slideInterval.current) clearInterval(slideInterval.current);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden h-screen max-h-[800px]">
        {/* Carousel Slides */}
        <div className="relative h-full w-full overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Slide Background */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Slide Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                      {/* Main Heading */}
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-white">{slide.title}</span>
                      </h1>
                      
                      {/* Subheading */}
                      <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                        {slide.subtitle}
                      </p>
                      
                      {/* CTA Button */}
                      <div className="mb-16">
                        <Link
                          to={slide.link === '/new-arrivals' ? '/accessories' : slide.link}
                          className={`group bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-2xl`}
                        >
                          {slide.cta}
                          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-12' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our commitment to excellence, innovation, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Premium materials and craftsmanship in every product</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-5 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-green-500/25 transition-all duration-300">
                <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Express shipping with real-time tracking</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-5 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                <RefreshCw className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Easy Returns</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">30-day return policy with instant refunds</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-300">
                <HeadphonesIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Dedicated customer service team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Handpicked Collection
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Featured Products</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of premium products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/accessories"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl"
            >
              View All Products
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Latest Arrivals
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">What's New</h2>
            <p className="text-lg sm:text-xl text-gray-600">Stay ahead with our latest collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Limited Time Offer
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Flash Sale</h2>
            <p className="text-lg sm:text-xl text-red-100">Don't miss out on these incredible deals</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Stay Updated</h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12">
              Subscribe for new product announcements and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm sm:text-base"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-xl text-sm sm:text-base">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;