import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '@app/shared/pages/error404/error404.component';

import { LayoutBasicComponent } from './layout/basic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  {
    path: 'index',
    loadChildren: () =>
      import('./pages/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'pages',
    component: LayoutBasicComponent,
    children: [
      {
        path: 'content',
        loadChildren: () =>
          import('./pages/content/content.module').then((m) => m.ContentModule),
      },
    ],
  },

  { path: 'error/404', component: Error404Component, pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
