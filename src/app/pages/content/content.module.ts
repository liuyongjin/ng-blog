import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { HomeTopComponent } from '../components/home-top/home-top.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, HomeTopComponent, AboutUsComponent],
  imports: [CommonModule, SharedModule, ContentRoutingModule],
})
export class ContentModule {}
