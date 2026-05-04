import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticlesService } from '../../../core/services/articles';
import { Article } from '../../../core/models/article.model';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-article-list',
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleListComponent {
  articles: Article[];
  activeTag: string | null = null;

  constructor(private articlesService: ArticlesService) {
    this.articles = this.articlesService.getAll();
  }

  get allTags(): string[] {
    return [...new Set(this.articles.flatMap(a => a.tags))];
  }

  get filteredArticles(): Article[] {
    return this.activeTag
      ? this.articlesService.getByTag(this.activeTag)
      : this.articles;
  }

  setTag(tag: string | null): void {
    this.activeTag = tag;
  }
}
