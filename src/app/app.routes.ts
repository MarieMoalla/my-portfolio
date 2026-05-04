import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'articles',
    loadComponent: () => import('./features/articles/article-list/article-list').then(m => m.ArticleListComponent)
  },
  {
    path: 'articles/:slug',
    loadComponent: () => import('./features/articles/article-detail/article-detail').then(m => m.ArticleDetailComponent)
  },
  { path: '**', redirectTo: '' }
];

