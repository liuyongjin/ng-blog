import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContentRoutingModule } from './content-routing.module';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { PigeonholeComponent } from './pigeonhole/pigeonhole.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    TagComponent,
    PigeonholeComponent,
    DetailComponent,
  ],
  imports: [CommonModule, SharedModule, ContentRoutingModule],
})
export class ContentModule {}
