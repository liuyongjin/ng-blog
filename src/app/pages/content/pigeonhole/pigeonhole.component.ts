import { Component, OnInit } from '@angular/core';
import { ArticleItem } from '@app/core/interface/article';
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
    this.article_times = ['2023', '2022'];
    this.article = {
      '2023': [
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
      ],
      '2022': [
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
      ],
    };
    // this.articlesService.getPigeonhole().subscribe((res: Article) => {
    //   this.article = res.data.data;
    // });
  }
}
