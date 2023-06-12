import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { HomeTopComponent } from '../components/home-top/home-top.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';
import { TagComponent } from './tag/tag.component';
import { PigeonholeComponent } from './pigeonhole/pigeonhole.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [HomeComponent, HomeTopComponent, AboutUsComponent, TagComponent, PigeonholeComponent, DetailComponent],
  imports: [CommonModule, SharedModule, ContentRoutingModule],
})
export class ContentModule {}
