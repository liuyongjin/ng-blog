import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '@app/core/interface/article';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-pigeonhole',
  templateUrl: './pigeonhole.component.html',
  styleUrls: ['./pigeonhole.component.scss'],
})
export class PigeonholeComponent implements OnInit {
  public article: any = {};
  public ObjectKeys = Object.keys;
  constructor(
    private articlesService: ArticleService,
    private titleService: Title
  ) {
    this.titleService.setTitle('归档');
  }

  ngOnInit() {
    console.log(123);
    // this.articlesService.getPigeonhole().subscribe((res: Article) => {
    //   this.article = res.data.data;
    // });
  }
}
