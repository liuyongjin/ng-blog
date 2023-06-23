import { Component, OnInit } from '@angular/core';
import { ArticleItem, ArticleResult } from '@app/core/interface/article';
import { TagItem, TagResult } from '@app/core/interface/tag';
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
    // {
    //   id: 1,
    //   name: 'tag1',
    //   des: 'des',
    //   color: '#ffffff',
    //   bg_color: '#333333',
    //   create_time: new Date().toDateString(),
    //   update_time: new Date().toDateString(),
    // },
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
    this.tagService.getTag().subscribe((res: TagResult) => {
      this.tag = res.data.data || [];
      //默认获取第一个标签的文章
      if (this.tag[0]) {
        this.title = this.tag[0].name;
        this.getArticle(this.tag[0].id);
      }
    });
  }

  selectTagHandle(item: any): void {
    this.title = item.name;
    this.getArticle(item.id);
  }

  getArticle(id: number): void {
    this.articlesService
      .searchArticleByTag({ tag_id: id })
      .subscribe((res: ArticleResult) => {
        this.article = res.data.data || [];
      });
  }
}
