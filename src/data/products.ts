import { Product } from '../types/Product';

export const products: Product[] = [
  // Phone Accessories - Cases
  {
    id: '1',
    name: 'Premium Leather iPhone Case',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/3831796/pexels-photo-3831796.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/3831796/pexels-photo-3831796.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3831796/pexels-photo-3831796.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    description: 'Handcrafted premium leather case with perfect fit and wireless charging compatibility.',
    category: 'accessories',
    subcategory: 'phone-cases',
    brand: 'Falcon Premium',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    featured: true,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Genuine Leather',
      'Compatibility': 'iPhone 14/15 Series',
      'Wireless Charging': 'Yes',
      'Drop Protection': 'Up to 6 feet'
    },
    colors: ['Black', 'Brown', 'Navy'],
    sizes: ['iPhone 14', 'iPhone 14 Pro', 'iPhone 15', 'iPhone 15 Pro']
  },
  {
    id: '2',
    name: 'Rugged Armor Phone Case',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/4316843/pexels-photo-4316843.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Military-grade protection with shock-absorbing corners and raised edges.',
    category: 'accessories',
    subcategory: 'phone-cases',
    brand: 'Falcon Defense',
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Material': 'TPU + PC',
      'Drop Protection': 'Military Grade',
      'Screen Protection': 'Raised Edges',
      'Port Access': 'Precise Cutouts'
    },
    colors: ['Black', 'Blue', 'Red'],
    sizes: ['iPhone 13', 'iPhone 14', 'Samsung S23', 'Samsung S24']
  },
  {
    id: '3',
    name: 'Clear Crystal Case',
    price: 599,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ultra-clear transparent case that showcases your phone\'s original design.',
    category: 'accessories',
    subcategory: 'phone-cases',
    brand: 'Falcon Clear',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: false,
    specifications: {
      'Material': 'Premium TPU',
      'Transparency': '99% Clear',
      'Anti-Yellowing': 'Yes',
      'Thickness': '1.2mm'
    },
    colors: ['Clear', 'Clear Blue', 'Clear Pink'],
    sizes: ['iPhone 13', 'iPhone 14', 'iPhone 15']
  },
  {
    id: '4',
    name: 'Wallet Flip Case',
    price: 1599,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/163945/car-vehicle-interior-vehicle-interior-163945.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium leather wallet case with card slots and stand functionality.',
    category: 'accessories',
    subcategory: 'phone-cases',
    brand: 'Falcon Wallet',
    rating: 4.6,
    reviews: 203,
    inStock: true,
    featured: true,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'PU Leather',
      'Card Slots': '3 Slots',
      'Stand Function': 'Yes',
      'Magnetic Closure': 'Yes'
    },
    colors: ['Black', 'Brown', 'Navy', 'Red'],
    sizes: ['iPhone 14', 'iPhone 15', 'Samsung S23']
  },

  // Phone Accessories - Chargers
  {
    id: '5',
    name: 'Wireless Fast Charging Pad',
    price: 899,
    image: 'https://images.pexels.com/photos/4316843/pexels-photo-4316843.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Universal wireless charging pad with 15W fast charging for all Qi-enabled devices.',
    category: 'accessories',
    subcategory: 'chargers',
    brand: 'Falcon Tech',
    rating: 4.6,
    reviews: 189,
    inStock: true,
    featured: true,
    isNew: true,
    isOnSale: false,
    specifications: {
      'Output': '15W Fast Charging',
      'Compatibility': 'All Qi-enabled devices',
      'Cable Length': '1.5m USB-C',
      'Safety': 'Over-voltage & temperature protection'
    },
    colors: ['Black', 'White']
  },
  {
    id: '6',
    name: 'USB-C Fast Charger 65W',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-speed 65W USB-C charger compatible with phones, tablets, and laptops.',
    category: 'accessories',
    subcategory: 'chargers',
    brand: 'Falcon Power',
    rating: 4.8,
    reviews: 267,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Power Output': '65W',
      'Ports': '2x USB-C, 1x USB-A',
      'Fast Charging': 'PD 3.0, QC 4.0',
      'Safety Features': 'Multiple Protection'
    },
    colors: ['White', 'Black']
  },
  {
    id: '7',
    name: 'Portable Power Bank 20000mAh',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/4316843/pexels-photo-4316843.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-capacity power bank with multiple ports and LED display.',
    category: 'accessories',
    subcategory: 'chargers',
    brand: 'Falcon Energy',
    rating: 4.7,
    reviews: 198,
    inStock: true,
    featured: true,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Capacity': '20000mAh',
      'Ports': '2x USB-A, 1x USB-C',
      'Input': 'USB-C & Micro USB',
      'Display': 'LED Battery Indicator'
    },
    colors: ['Black', 'Blue', 'White']
  },
  {
    id: '8',
    name: 'Car Charger Dual Port',
    price: 699,
    image: 'https://images.pexels.com/photos/163945/car-vehicle-interior-vehicle-interior-163945.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Compact dual-port car charger with fast charging technology.',
    category: 'accessories',
    subcategory: 'chargers',
    brand: 'Falcon Auto',
    rating: 4.4,
    reviews: 145,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: false,
    specifications: {
      'Ports': '2x USB-A',
      'Output': '24W Total',
      'Compatibility': 'Universal',
      'LED Indicator': 'Yes'
    },
    colors: ['Black', 'Silver']
  },

  // Phone Accessories - Audio
  {
    id: '9',
    name: 'Bluetooth 5.0 Earbuds',
    price: 2499,
    originalPrice: 3299,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'True wireless earbuds with active noise cancellation and 24-hour battery life.',
    category: 'accessories',
    subcategory: 'audio',
    brand: 'Falcon Audio',
    rating: 4.7,
    reviews: 312,
    inStock: true,
    featured: true,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Bluetooth': 'Version 5.0',
      'Battery Life': '24 hours with case',
      'Noise Cancellation': 'Active ANC',
      'Water Resistance': 'IPX7'
    },
    colors: ['Black', 'White', 'Blue']
  },
  {
    id: '10',
    name: 'Over-Ear Wireless Headphones',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium over-ear headphones with studio-quality sound and comfort padding.',
    category: 'accessories',
    subcategory: 'audio',
    brand: 'Falcon Studio',
    rating: 4.9,
    reviews: 189,
    inStock: true,
    featured: true,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz-20kHz',
      'Battery Life': '30 hours',
      'Noise Cancellation': 'Hybrid ANC'
    },
    colors: ['Black', 'Silver', 'Blue']
  },
  {
    id: '11',
    name: 'Bluetooth Speaker Portable',
    price: 1799,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Compact portable speaker with 360-degree sound and waterproof design.',
    category: 'accessories',
    subcategory: 'audio',
    brand: 'Falcon Sound',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: false,
    specifications: {
      'Output Power': '20W',
      'Battery Life': '12 hours',
      'Water Resistance': 'IPX6',
      'Connectivity': 'Bluetooth 5.0'
    },
    colors: ['Black', 'Red', 'Blue', 'Green']
  },
  {
    id: '12',
    name: 'Gaming Earphones Wired',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-performance gaming earphones with crystal clear microphone.',
    category: 'accessories',
    subcategory: 'audio',
    brand: 'Falcon Gaming',
    rating: 4.5,
    reviews: 167,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Driver': '10mm Dynamic',
      'Microphone': 'Detachable',
      'Cable Length': '1.2m',
      'Compatibility': 'Universal 3.5mm'
    },
    colors: ['Black', 'Red', 'Blue']
  },

  // Phone Accessories - Mounts
  {
    id: '13',
    name: 'Car Mount Pro',
    price: 699,
    image: 'https://images.pexels.com/photos/163945/car-vehicle-interior-vehicle-interior-163945.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Magnetic car mount with 360° rotation and secure grip for safe driving.',
    category: 'accessories',
    subcategory: 'mounts',
    brand: 'Falcon Auto',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: false,
    specifications: {
      'Mount Type': 'Magnetic',
      'Rotation': '360°',
      'Compatibility': 'All smartphone sizes',
      'Installation': 'Dashboard/Windshield'
    },
    colors: ['Black', 'Silver']
  },
  {
    id: '14',
    name: 'Desktop Phone Stand',
    price: 499,
    image: 'https://images.pexels.com/photos/163945/car-vehicle-interior-vehicle-interior-163945.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Adjustable aluminum desktop stand for phones and tablets.',
    category: 'accessories',
    subcategory: 'mounts',
    brand: 'Falcon Desk',
    rating: 4.3,
    reviews: 89,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: false,
    specifications: {
      'Material': 'Aluminum Alloy',
      'Adjustable Angle': '0-85°',
      'Compatibility': '4-12 inch devices',
      'Anti-Slip': 'Silicone Pads'
    },
    colors: ['Silver', 'Space Gray', 'Rose Gold']
  },
  {
    id: '15',
    name: 'Bike Phone Mount',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/163945/car-vehicle-interior-vehicle-interior-163945.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Secure bike mount with shock absorption and weatherproof design.',
    category: 'accessories',
    subcategory: 'mounts',
    brand: 'Falcon Bike',
    rating: 4.6,
    reviews: 123,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Clamp Size': '22-32mm',
      'Shock Absorption': 'Yes',
      'Weather Resistance': 'IPX5',
      'Quick Release': 'One-Touch'
    },
    colors: ['Black', 'Blue']
  },

  // Men's Fashion - Shirts
  {
    id: '16',
    name: 'Premium Cotton T-Shirt',
    price: 1299,
    image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    description: 'Soft premium cotton t-shirt with modern fit and superior comfort.',
    category: 'menswear',
    subcategory: 'shirts',
    brand: 'Falcon Basics',
    rating: 4.7,
    reviews: 567,
    inStock: true,
    featured: true,
    isNew: true,
    isOnSale: false,
    specifications: {
      'Material': '100% Premium Cotton',
      'GSM': '180 GSM',
      'Fit': 'Slim Fit',
      'Neck': 'Round Neck'
    },
    colors: ['White', 'Black', 'Navy', 'Grey', 'Red', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '17',
    name: 'Formal Dress Shirt',
    price: 2199,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    description: 'Crisp formal shirt perfect for office wear and special occasions.',
    category: 'menswear',
    subcategory: 'shirts',
    brand: 'Falcon Formal',
    rating: 4.8,
    reviews: 289,
    inStock: true,
    featured: true,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Cotton Blend',
      'Fit': 'Slim Fit',
      'Collar': 'Spread Collar',
      'Cuff': 'Button Cuff'
    },
    colors: ['White', 'Light Blue', 'Pink', 'Light Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '18',
    name: 'Casual Polo Shirt',
    price: 1599,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    description: 'Classic polo shirt with moisture-wicking fabric and comfortable fit.',
    category: 'menswear',
    subcategory: 'shirts',
    brand: 'Falcon Sport',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Cotton Pique',
      'Fit': 'Regular Fit',
      'Collar': 'Polo Collar',
      'Features': 'Moisture Wicking'
    },
    colors: ['Navy', 'White', 'Black', 'Red', 'Green', 'Yellow'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '19',
    name: 'Henley Long Sleeve',
    price: 1799,
    image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    description: 'Comfortable henley shirt with button placket and long sleeves.',
    category: 'menswear',
    subcategory: 'shirts',
    brand: 'Falcon Casual',
    rating: 4.5,
    reviews: 178,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: false,
    specifications: {
      'Material': 'Cotton Jersey',
      'Fit': 'Regular Fit',
      'Sleeves': 'Long Sleeve',
      'Buttons': '3-Button Placket'
    },
    colors: ['Grey', 'Navy', 'Black', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '20',
    name: 'Graphic Print T-Shirt',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    description: 'Trendy graphic print t-shirt with modern designs and comfortable fit.',
    category: 'menswear',
    subcategory: 'shirts',
    brand: 'Falcon Graphics',
    rating: 4.4,
    reviews: 156,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Material': '100% Cotton',
      'Print': 'Screen Print',
      'Fit': 'Regular Fit',
      'Neck': 'Round Neck'
    },
    colors: ['Black', 'White', 'Navy', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  // Men's Fashion - Jackets
  {
    id: '21',
    name: 'Classic Denim Jacket',
    price: 3999,
    originalPrice: 5499,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Timeless denim jacket crafted from premium cotton with a perfect fit.',
    category: 'menswear',
    subcategory: 'jackets',
    brand: 'Falcon Denim',
    rating: 4.9,
    reviews: 423,
    inStock: true,
    featured: true,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': '100% Cotton Denim',
      'Fit': 'Regular Fit',
      'Wash': 'Stone Washed',
      'Pockets': '4 Functional Pockets'
    },
    colors: ['Blue', 'Black', 'Light Blue', 'Dark Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '22',
    name: 'Leather Biker Jacket',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Genuine leather biker jacket with asymmetric zip and quilted details.',
    category: 'menswear',
    subcategory: 'jackets',
    brand: 'Falcon Leather',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    featured: true,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Material': 'Genuine Leather',
      'Lining': 'Polyester',
      'Closure': 'Asymmetric Zip',
      'Details': 'Quilted Shoulders'
    },
    colors: ['Black', 'Brown', 'Dark Brown'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '23',
    name: 'Bomber Jacket',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Classic bomber jacket with ribbed cuffs and modern fit.',
    category: 'menswear',
    subcategory: 'jackets',
    brand: 'Falcon Urban',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Polyester Blend',
      'Fit': 'Regular Fit',
      'Closure': 'Full Zip',
      'Features': 'Ribbed Cuffs & Hem'
    },
    colors: ['Black', 'Navy', 'Olive', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '24',
    name: 'Windbreaker Jacket',
    price: 1999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Lightweight windbreaker perfect for outdoor activities and casual wear.',
    category: 'menswear',
    subcategory: 'jackets',
    brand: 'Falcon Sport',
    rating: 4.4,
    reviews: 189,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: false,
    specifications: {
      'Material': 'Nylon',
      'Water Resistance': 'DWR Coating',
      'Hood': 'Adjustable Hood',
      'Pockets': '2 Side Pockets'
    },
    colors: ['Black', 'Navy', 'Red', 'Blue', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  // Men's Fashion - Shoes
  {
    id: '25',
    name: 'Leather Casual Shoes',
    price: 4999,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Handcrafted leather shoes with comfort sole and premium finish.',
    category: 'menswear',
    subcategory: 'shoes',
    brand: 'Falcon Footwear',
    rating: 4.9,
    reviews: 178,
    inStock: true,
    featured: true,
    isNew: true,
    isOnSale: false,
    specifications: {
      'Material': 'Genuine Leather',
      'Sole': 'Rubber Comfort Sole',
      'Closure': 'Lace-up',
      'Heel Height': '1 inch'
    },
    colors: ['Brown', 'Black', 'Tan', 'Dark Brown'],
    sizes: ['7', '8', '9', '10', '11', '12']
  },
  {
    id: '26',
    name: 'Sports Running Shoes',
    price: 3499,
    originalPrice: 4499,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-performance running shoes with advanced cushioning technology.',
    category: 'menswear',
    subcategory: 'shoes',
    brand: 'Falcon Sport',
    rating: 4.7,
    reviews: 267,
    inStock: true,
    featured: true,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Mesh & Synthetic',
      'Cushioning': 'Air Cushion',
      'Sole': 'EVA Midsole',
      'Support': 'Arch Support'
    },
    colors: ['Black', 'White', 'Blue', 'Red', 'Grey'],
    sizes: ['7', '8', '9', '10', '11', '12']
  },
  {
    id: '27',
    name: 'Canvas Sneakers',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Classic canvas sneakers with vintage styling and comfortable fit.',
    category: 'menswear',
    subcategory: 'shoes',
    brand: 'Falcon Classic',
    rating: 4.5,
    reviews: 198,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Canvas Upper',
      'Sole': 'Rubber Sole',
      'Closure': 'Lace-up',
      'Style': 'Low Top'
    },
    colors: ['White', 'Black', 'Navy', 'Red', 'Green'],
    sizes: ['7', '8', '9', '10', '11', '12']
  },
  {
    id: '28',
    name: 'Formal Oxford Shoes',
    price: 5999,
    originalPrice: 7499,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Elegant oxford shoes perfect for formal occasions and business wear.',
    category: 'menswear',
    subcategory: 'shoes',
    brand: 'Falcon Formal',
    rating: 4.8,
    reviews: 145,
    inStock: true,
    featured: true,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Premium Leather',
      'Construction': 'Goodyear Welt',
      'Sole': 'Leather Sole',
      'Style': 'Oxford'
    },
    colors: ['Black', 'Brown', 'Dark Brown'],
    sizes: ['7', '8', '9', '10', '11', '12']
  },

  // Men's Fashion - Accessories
  {
    id: '29',
    name: 'Leather Belt Classic',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium leather belt with classic buckle design and adjustable fit.',
    category: 'menswear',
    subcategory: 'accessories',
    brand: 'Falcon Leather',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Genuine Leather',
      'Width': '35mm',
      'Buckle': 'Metal Buckle',
      'Length': 'Adjustable'
    },
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['32', '34', '36', '38', '40', '42']
  },
  {
    id: '30',
    name: 'Analog Watch Classic',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Elegant analog watch with stainless steel case and leather strap.',
    category: 'menswear',
    subcategory: 'accessories',
    brand: 'Falcon Time',
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: true,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Movement': 'Quartz',
      'Case Material': 'Stainless Steel',
      'Strap': 'Leather',
      'Water Resistance': '30m'
    },
    colors: ['Black', 'Brown', 'Silver'],
    sizes: ['One Size']
  },
  {
    id: '31',
    name: 'Leather Wallet Bifold',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Compact bifold wallet with multiple card slots and bill compartment.',
    category: 'menswear',
    subcategory: 'accessories',
    brand: 'Falcon Leather',
    rating: 4.5,
    reviews: 167,
    inStock: true,
    featured: false,
    isNew: false,
    isOnSale: true,
    specifications: {
      'Material': 'Genuine Leather',
      'Card Slots': '8 Slots',
      'Bill Compartment': '2 Sections',
      'ID Window': 'Yes'
    },
    colors: ['Black', 'Brown', 'Navy'],
    sizes: ['One Size']
  },
  {
    id: '32',
    name: 'Sunglasses Aviator',
    price: 1599,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Classic aviator sunglasses with UV protection and polarized lenses.',
    category: 'menswear',
    subcategory: 'accessories',
    brand: 'Falcon Vision',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    featured: false,
    isNew: true,
    isOnSale: true,
    specifications: {
      'Frame Material': 'Metal',
      'Lens': 'Polarized',
      'UV Protection': '100% UV400',
      'Style': 'Aviator'
    },
    colors: ['Gold', 'Silver', 'Black'],
    sizes: ['One Size']
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: 'accessories' | 'menswear') => 
  products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getSaleProducts = () => products.filter(p => p.isOnSale);
export const getProductsBySubcategory = (category: string, subcategory: string) =>
  products.filter(p => p.category === category && p.subcategory === subcategory);
export const getProductsByPriceRange = (min: number, max: number) =>
  products.filter(p => p.price >= min && p.price <= max);
export const getProductsByBrand = (brand: string) =>
  products.filter(p => p.brand === brand);