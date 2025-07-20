export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  category: 'accessories' | 'menswear';
  subcategory: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  isNew: boolean;
  isOnSale: boolean;
  specifications?: Record<string, string>;
  colors?: string[];
  sizes?: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}