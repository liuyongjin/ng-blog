import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { PigeonholeComponent } from './pigeonhole/pigeonhole.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pigeonhole', component: PigeonholeComponent },
  { path: 'tag', component: TagComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
