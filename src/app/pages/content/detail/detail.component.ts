import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleItem } from '@app/core/interface/article';
import { ArticleService } from '@app/core/services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public article: ArticleItem | undefined;
  public id: any;
  constructor(
    private articlesService: ArticleService,
    private router: Router,
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
      // this.browseHandle();
      this.getDetail();
    });
  }
  getDetail(): void {
    this.article = {
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
    };
    // this.articlesService.getArticleDetail(this.id).subscribe((res: Article) => {
    //   this.article = res.data.data as ArticleItem;
    //   this.titleService.setTitle(this.article.title);
    // });
  }
  //处理文章内容
  securityHTML(strHTML: any) {
    return this.dz.bypassSecurityTrustHtml(strHTML);
  }

  //浏览量加一
  browseHandle(): void {
    // this.articlesService.browse(this.id).subscribe((res: Article) => {});
  }
  //点赞加一
  praiseHandle(): void {
    // this.articlesService.praise(this.id).subscribe((res) => {
    //   if (res.errorCode === 0) {
    //     this.getDetail();
    //   }
    // });
  }
}
