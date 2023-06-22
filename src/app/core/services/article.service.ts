import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ArticleResult } from '../interface/article';
import { BaseService, STAHttpOptions } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  // public headers = new Headers({
  //   'Content-Type': 'application/json'
  // });
  // constructor(
  //   @Inject('BASE_CONFIG') private config: BASE_CONFIG,
  //   private http: HttpClient
  // ) {}
  //获取归档列表
  // getPigeonhole(): Observable<Article> {
  //   return this.http.post<Article>(
  //     `${this.config.base_url}/article/pigeonholeList`,
  //     {}
  //   );
  // }
  // //搜索文章(名称)
  // searchArticle(title: string): Observable<Article> {
  //   return this.http.post<Article>(
  //     `${this.config.base_url}/article/searchArticle`,
  //     { title: title }
  //   );
  // }

  // 搜索文章(名称)
  searchArticle(
    req?: any,
    options?: STAHttpOptions
  ): Observable<ArticleResult> {
    return this.request('POST', '/article/searchArticle', {
      body: req,
      ...options,
    });
  }

  // //搜索文章(tag_id)
  // searchArticleByTag(tag_id: number): Observable<Article> {
  //   return this.http.post<Article>(
  //     `${this.config.base_url}/article/searchArticle`,
  //     { tag_id: tag_id }
  //   );
  // }

  // 随机获取文章
  getRandomArticle(
    req?: any,
    options?: STAHttpOptions
  ): Observable<ArticleResult> {
    return this.request('POST', '/article/randomList', {
      body: req,
      ...options,
    });
  }

  // //获取详情
  // getArticleDetail(id: number): Observable<Article> {
  //   return this.http.post<Article>(`${this.config.base_url}/article/detail`, {
  //     id: id,
  //   });
  // }
  // //点赞
  // praise(id: number): Observable<Article> {
  //   return this.http.post<Article>(`${this.config.base_url}/article/praise`, {
  //     id: id,
  //   });
  // }
  // //浏览
  // browse(id: number): Observable<Article> {
  //   return this.http.post<Article>(`${this.config.base_url}/article/browse`, {
  //     id: id,
  //   });
  // }
}
