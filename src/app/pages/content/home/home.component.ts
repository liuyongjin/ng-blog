import { Component, OnInit } from '@angular/core';
import { ArticleItem, ArticleResult } from '@app/core/interface/article';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public article: ArticleItem[] = [];
  public base_img_url = '';
  public article_loading = false;

  constructor(private articlesService: ArticleService) {}

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.article_loading = true;
    this.articlesService.getRandomArticle().subscribe((res: ArticleResult) => {
      this.article = res.data.data || [];
      this.article_loading = false;
    });
  }
}
