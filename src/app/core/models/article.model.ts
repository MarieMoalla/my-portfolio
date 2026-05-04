export interface Article {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  publishedAt: string;
  readTime: number; // minutes
  coverImage?: string;
  category: string;
  categorySlug: string;
  views?: string;
  externalUrl?: string;
}

export interface ArticleCategory {
  name: string;
  slug: string;
  description: string;
}
