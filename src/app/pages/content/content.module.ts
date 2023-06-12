import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { HomeTopComponent } from '../components/home-top/home-top.component';
import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, HomeTopComponent],
  imports: [CommonModule, SharedModule, ContentRoutingModule],
})
export class ContentModule {}
