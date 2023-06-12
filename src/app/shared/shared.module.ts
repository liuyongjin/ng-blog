import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { SearchComponent } from '../pages/components/search/search.component';
// import { LeftComponent } from '@app/shared/components/left/left.component';
// import { TopComponent } from '@app/shared/components/top/top.component';
import { ContentComponent } from '@app/shared/components/content/content.component';
import { Error404Component } from '@app/shared/pages/error404/error404.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { IconsProviderModule } from '../icons-provider.module';
import { FormatPipe } from '../pipe/format.pipe';

@NgModule({
  declarations: [Error404Component, ContentComponent, FormatPipe],
  imports: [RouterModule, CommonModule, TranslateModule, FormsModule],
  exports: [
    ContentComponent,
    Error404Component,
    CommonModule,
    TranslateModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    FormatPipe,
  ],
})
export class SharedModule {}
