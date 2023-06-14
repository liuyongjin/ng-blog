import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  date = new Date();
  currentLang = '';

  constructor(
    public translate: TranslateService,
    private i18n: NzI18nService,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang;
  }

  public selectLanguage(lang: string): void {
    this.translate.use(lang);
    this.i18n.setLocale(lang === 'en_US' ? en_US : zh_CN);
    // 更新当前记录的语言
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentLanguage', lang);
    }
  }
}
