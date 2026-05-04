export interface Project {
  id: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  featured: boolean;
}
