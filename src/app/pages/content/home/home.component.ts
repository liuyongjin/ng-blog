import { Component, Inject, OnInit } from '@angular/core';
import { BASE_CONFIG } from '@app/constant';
import { Article, ArticleItem } from '@app/core/interface/article';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public article: ArticleItem[] = [];
  public base_img_url: string;
  public article_loading = false;

  constructor(
    private articlesService: ArticleService,
    @Inject('BASE_CONFIG') private config: BASE_CONFIG
  ) {
    this.base_img_url = this.config.base_img_url;
  }

  ngOnInit() {
    this.init();
  }

  init(): void {
    // this.article_loading = true;
    // this.articlesService.getRandomArticle().subscribe((res: Article) => {
    //   this.article = res.data.data as ArticleItem[];
    //   this.article_loading = false;
    // });
  }
}
