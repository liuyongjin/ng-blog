import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeTopComponent } from '../components/home-top/home-top.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HomeTopComponent],
  imports: [CommonModule, SharedModule, ContentRoutingModule],
})
export class ContentModule {}
