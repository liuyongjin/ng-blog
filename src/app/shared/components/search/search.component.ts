import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleItem, ArticleResult } from '@app/core/interface/article';
import { ArticleService } from '@app/core/services';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  public article: ArticleItem[] = [];
  private searchStream = new Subject<string>();

  searchValue: string | null = '';

  constructor(private articlesService: ArticleService) {}

  ngOnInit() {
    // 订阅
    this.initSearchSubscription();
  }

  ngOnDestroy() {
    // 取消订阅
    this.searchStream.unsubscribe();
  }

  private async initSearchSubscription() {
    this.searchStream
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(async (value) => {
        this.articlesService
          .searchArticle({ title: value })
          .subscribe((res: ArticleResult) => {
            this.article = res?.data?.data || [];
          });
      });
  }

  onInput(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.searchStream.next(value);
  }
}
