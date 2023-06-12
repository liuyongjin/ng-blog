import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-layout-basic',
  template: `
    <nz-layout style="height: 100%;">
      <nz-sider>
        <app-left class="ng-blog-flex__left"></app-left>
      </nz-sider>
      <nz-layout #layout>
        <app-top (selectLang)="selectLanguage($event)" #appTop></app-top>
        <nz-content>
          <router-outlet></router-outlet>
        </nz-content>
      </nz-layout>
    </nz-layout>
  `,
})
export class LayoutBasicComponent {
  constructor(
    public translate: TranslateService,
    private i18n: NzI18nService,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  public selectLanguage(lang: string): void {
    this.translate.use(lang);
    this.i18n.setLocale(lang === 'en_US' ? en_US : zh_CN);
    // 更新当前记录的语言
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentLanguage', lang);
    }
  }
}
