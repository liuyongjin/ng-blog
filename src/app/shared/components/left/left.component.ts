import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent {
  constructor(private router: Router, private titleService: Title) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((info: any) => {
        if (info.urlAfterRedirects.includes('/home')) {
          this.titleService.setTitle('首页');
        }
        if (info.urlAfterRedirects.includes('/pigeonhole')) {
          this.titleService.setTitle('归档');
        }
        if (info.urlAfterRedirects.includes('/tag')) {
          this.titleService.setTitle('标签');
        }
        if (info.urlAfterRedirects.includes('/about-us')) {
          this.titleService.setTitle('关于我');
        }
      });
  }
}
