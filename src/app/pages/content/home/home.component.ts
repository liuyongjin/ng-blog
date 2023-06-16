import { Component, Inject, OnInit } from '@angular/core';
import { BASE_CONFIG } from '@app/constant';
import { ArticleItem } from '@app/core/interface/article';
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

  constructor(
    private articlesService: ArticleService,
    @Inject('BASE_CONFIG') private config: BASE_CONFIG
  ) {
    // this.base_img_url = this.config.base_img_url;
  }

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.article = [
      {
        id: 1,
        title: 'test',
        create_time: new Date().toDateString(),
        browse_count: 1,
        comment_count: 1,
        content: 'content',
        des: 'des',
        main_img: '/assets/images/yasuo.jpg',
        praise_count: 1,
        tags: [
          {
            id: 1,
            name: 'tag1',
            des: 'des',
            color: '#ffffff',
            bg_color: '#333333',
            create_time: new Date().toDateString(),
            update_time: new Date().toDateString(),
          },
        ],
        update_time: new Date().toDateString(),
        status: 1,
      },
      {
        id: 2,
        title: 'test',
        create_time: new Date().toDateString(),
        browse_count: 1,
        comment_count: 1,
        content: 'content',
        des: 'des',
        main_img: '/assets/images/yasuo.jpg',
        praise_count: 1,
        tags: [
          {
            id: 1,
            name: 'tag1',
            des: 'des',
            color: '#ffffff',
            bg_color: '#333333',
            create_time: new Date().toDateString(),
            update_time: new Date().toDateString(),
          },
        ],
        update_time: new Date().toDateString(),
        status: 1,
      },
    ];
    // this.article_loading = true;
    // this.articlesService.getRandomArticle().subscribe((res: Article) => {
    //   this.article = res.data.data as ArticleItem[];
    //   this.article_loading = false;
    // });
  }
}
