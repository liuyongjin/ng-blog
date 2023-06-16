import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    public translate: TranslateService
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((info: any) => {
        if (info.urlAfterRedirects.includes('/home')) {
          this.titleService.setTitle(this.translate.instant('HOME'));
        }
        if (info.urlAfterRedirects.includes('/pigeonhole')) {
          this.titleService.setTitle(this.translate.instant('PIGEONHOLE'));
        }
        if (info.urlAfterRedirects.includes('/tag')) {
          this.titleService.setTitle(this.translate.instant('TAG'));
        }
        if (info.urlAfterRedirects.includes('/about-us')) {
          this.titleService.setTitle(this.translate.instant('ABOUT_US'));
        }
      });
  }
}
