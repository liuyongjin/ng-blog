import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { LayoutBasicComponent } from './basic.component';

@NgModule({
  declarations: [LayoutBasicComponent],
  imports: [CommonModule, SharedModule],
})
export class LayoutModule {}
