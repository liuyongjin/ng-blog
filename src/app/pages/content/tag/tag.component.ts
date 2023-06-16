import { Component, OnInit } from '@angular/core';
import { ArticleItem } from '@app/core/interface/article';
import { TagItem } from '@app/core/interface/tag';
import { TagService } from '@app/core/services';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  public article: ArticleItem[] = [];
  public title = '';
  public tag: TagItem[] = [
    {
      id: 1,
      name: 'tag1',
      des: 'des',
      color: '#ffffff',
      bg_color: '#333333',
      create_time: new Date().toDateString(),
      update_time: new Date().toDateString(),
    },
  ];
  constructor(
    private tagService: TagService,
    private articlesService: ArticleService
  ) {}

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.title = 'tag1';
    this.getArticle(1);
    // this.tagService.getTag().subscribe((res: Tag) => {
    //   this.tag = res.data.data;
    //   //默认获取第一个标签的文章
    //   if (this.tag[0]) {
    //     this.title = this.tag[0].name;
    //     this.getArticle(this.tag[0].id);
    //   }
    // });
  }

  selectTagHandle(item: any): void {
    this.title = item.name;
    this.getArticle(item.id);
  }

  getArticle(id: number): void {
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
    // this.articlesService.searchArticleByTag(id).subscribe((res: Article) => {
    //   this.article = res.data.data as ArticleItem[];
    // });
  }
}
