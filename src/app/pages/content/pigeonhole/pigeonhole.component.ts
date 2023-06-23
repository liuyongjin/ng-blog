import { Component, OnInit } from '@angular/core';
import { ArticleItem, ArticleListResult } from '@app/core/interface/article';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-pigeonhole',
  templateUrl: './pigeonhole.component.html',
  styleUrls: ['./pigeonhole.component.scss'],
})
export class PigeonholeComponent implements OnInit {
  public article: { [key: string]: ArticleItem[] } = {};
  public article_times: string[] = [];
  constructor(private articlesService: ArticleService) {}

  ngOnInit() {
    this.articlesService.getPigeonhole().subscribe((res: ArticleListResult) => {
      const resData = res.data || {};
      this.article = resData;
      this.article_times = Object.keys(resData).sort(
        (a: string, b: string) => parseInt(b) - parseInt(a)
      );
    });
  }
}
