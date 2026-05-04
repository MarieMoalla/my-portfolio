import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticlesService } from '../../../core/services/articles';
import { Article, ArticleCategory } from '../../../core/models/article.model';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-article-category',
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './article-category.html',
  styleUrl: './article-category.scss',
})
export class ArticleCategoryComponent implements OnInit {
  category: ArticleCategory | undefined;
  articles: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('categorySlug') ?? '';
    this.category = this.articlesService.getCategoryBySlug(slug);
    this.articles = this.articlesService.getByCategory(slug);
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
