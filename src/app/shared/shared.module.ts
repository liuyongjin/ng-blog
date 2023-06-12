import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeftComponent } from '@app/shared/components/left/left.component';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { TopComponent } from '@app/shared/components/top/top.component';
import { Error404Component } from '@app/shared/pages/error404/error404.component';
import { TranslateModule } from '@ngx-translate/core';

import { IconsProviderModule } from '../icons-provider.module';
import { FormatPipe } from '../pipe/format.pipe';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const COMPONENTS: Array<Type<void>> = [
  Error404Component,
  LeftComponent,
  SearchComponent,
  TopComponent,
];
const PIPES: Array<Type<void>> = [FormatPipe];
const DIRECTIVES: Array<Type<void>> = [];
const THIRDMODULES: Array<Type<void>> = [TranslateModule];

@NgModule({
  declarations: [...DIRECTIVES, ...PIPES, ...COMPONENTS],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ...SHARED_ZORRO_MODULES,
    ...THIRDMODULES,
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    IconsProviderModule,
    ...DIRECTIVES,
    ...PIPES,
    ...COMPONENTS,
    ...SHARED_ZORRO_MODULES,
    ...THIRDMODULES,
  ],
})
export class SharedModule {}
