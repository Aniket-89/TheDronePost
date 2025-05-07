export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  tags: string[];
  featured: boolean;
  trending: boolean;
  breaking: boolean;
}

export interface Author {
  id: number;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}