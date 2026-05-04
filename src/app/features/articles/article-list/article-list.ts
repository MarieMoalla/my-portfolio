import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticlesService } from '../../../core/services/articles';
import { ArticleCategory } from '../../../core/models/article.model';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-article-list',
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleListComponent {
  categories: ArticleCategory[];

  constructor(private articlesService: ArticlesService) {
    this.categories = this.articlesService.getAllCategories();
  }

  getArticleCount(categorySlug: string): number {
    return this.articlesService.getByCategory(categorySlug).length;
  }

  getTotalViews(categorySlug: string): string {
    const total = this.articlesService.getByCategory(categorySlug)
      .reduce((sum, article) => {
        const v = article.views ?? '0';
        const num = v.toLowerCase().endsWith('k')
          ? parseFloat(v) * 1000
          : parseFloat(v);
        return sum + (isNaN(num) ? 0 : num);
      }, 0);
    return total >= 1000
      ? (total / 1000).toFixed(total % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'k'
      : total.toString();
  }
}