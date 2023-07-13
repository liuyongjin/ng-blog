import { Component, OnInit } from '@angular/core';
import { TagItem, TagResult } from '@app/core/interface/tag';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  selectTagId: number | undefined;
  public tags: TagItem[] = [];
  constructor(private articlesService: ArticleService) {}

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.getArticle();
  }

  selectTagHandle(item: any): void {
    if (this.selectTagId) {
      this.selectTagId = undefined;
    } else {
      this.selectTagId = item.id;
    }
    this.getArticle(this.selectTagId);
  }

  getArticle(id?: number): void {
    this.articlesService
      .searchArticleByTag({ tag_id: id })
      .subscribe((res: TagResult) => {
        this.tags = res.data.data || [];
        console.log(this.tags);
      });
  }
}
