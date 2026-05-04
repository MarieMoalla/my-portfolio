import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticlesService } from '../../../core/services/articles';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss',
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.article = this.articlesService.getBySlug(slug);
  }
}
