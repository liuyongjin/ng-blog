import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { NgParticlesModule } from 'ng-particles';

import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SharedModule, IndexRoutingModule, NgParticlesModule],
})
export class IndexModule {}
