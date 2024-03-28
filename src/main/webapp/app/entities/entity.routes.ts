import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'appApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'blog',
    data: { pageTitle: 'appApp.blog.home.title' },
    loadChildren: () => import('./blog/blog.routes'),
  },
  {
    path: 'post',
    data: { pageTitle: 'appApp.post.home.title' },
    loadChildren: () => import('./post/post.routes'),
  },
  {
    path: 'tag',
    data: { pageTitle: 'appApp.tag.home.title' },
    loadChildren: () => import('./tag/tag.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
