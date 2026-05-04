import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  private articles: Article[] = [
    {
      id: 1,
      slug: 'getting-started-with-angular',
      title: 'Getting Started with Angular',
      summary: 'A beginner-friendly introduction to Angular — components, routing, and services.',
      content: `Angular is a powerful framework for building web applications. In this article we cover the basics of components, routing, and dependency injection.`,
      tags: ['Angular', 'TypeScript', 'Frontend'],
      publishedAt: '2026-04-10',
      readTime: 5
    },
    {
      id: 2,
      slug: 'css-grid-vs-flexbox',
      title: 'CSS Grid vs Flexbox: When to Use Which',
      summary: 'A practical guide to choosing between CSS Grid and Flexbox for your layouts.',
      content: `Both CSS Grid and Flexbox are powerful layout tools. Learn when to reach for each one and how they complement each other.`,
      tags: ['CSS', 'Layout', 'Frontend'],
      publishedAt: '2026-03-22',
      readTime: 4
    }
  ];

  getAll(): Article[] {
    return this.articles;
  }

  getBySlug(slug: string): Article | undefined {
    return this.articles.find(a => a.slug === slug);
  }

  getByTag(tag: string): Article[] {
    return this.articles.filter(a => a.tags.includes(tag));
  }
}
