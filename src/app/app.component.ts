import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private i18n: NzI18nService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.initLanguage();
  }

  public initLanguage() {
    this.translate.setDefaultLang('zh_CN');
    // 语言初始化(若未设置语言, 则取浏览器语言,默认中文)
    let currentLanguage = 'zh_CN';
    if (isPlatformBrowser(this.platformId)) {
      currentLanguage = localStorage.getItem('currentLanguage') || 'zh_CN';
    }
    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh_CN'作为默认语言
    this.translate.use(currentLanguage);
    //设置antd的语言
    this.i18n.setLocale(currentLanguage === 'en_US' ? en_US : zh_CN);
    // 记录当前设置的语言（判断是否是在浏览器环境）
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentLanguage', currentLanguage);
    }
  }
}
