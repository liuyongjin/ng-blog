import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleItem, ArticleItemResult } from '@app/core/interface/article';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public article: ArticleItem | undefined;
  public id!: number;
  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute,
    private titleService: Title,
    public dz: DomSanitizer
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getDetail();
      this.browseHandle();
    });
  }

  getDetail(): void {
    this.articlesService
      .getArticleDetail(this.id)
      .subscribe((res: ArticleItemResult) => {
        this.article = res.data || {};
        this.article?.title && this.titleService.setTitle(this.article.title);
      });
  }

  //处理文章内容
  securityHTML(strHTML: any) {
    return this.dz.bypassSecurityTrustHtml(strHTML);
  }

  //浏览量加一
  browseHandle(): void {
    this.articlesService.browse(this.id).subscribe((res: ArticleItemResult) => {
      this.article = res.data || {};
    });
  }

  //点赞加一
  praiseHandle(): void {
    this.articlesService.praise(this.id).subscribe((res) => {
      if (res.errorCode === 0) {
        // this.getDetail();
        this.article = res.data || {};
      }
    });
  }
}
