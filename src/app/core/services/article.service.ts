import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  ArticleItemResult,
  ArticleListResult,
  ArticleResult,
} from '../interface/article';
import { BaseService, STAHttpOptions } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  // 获取归档列表
  getPigeonhole(
    req?: any,
    options?: STAHttpOptions
  ): Observable<ArticleListResult> {
    return this.request('POST', '/article/pigeonholeList', {
      body: req,
      ...options,
    });
  }

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

  // 搜索文章( { tag_id: tag_id })
  searchArticleByTag(
    req?: any,
    options?: STAHttpOptions
  ): Observable<ArticleResult> {
    return this.request('POST', '/article/searchArticleByTag', {
      body: req,
      ...options,
    });
  }

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

  // 获取详情
  getArticleDetail(
    req?: any,
    options?: STAHttpOptions
  ): Observable<ArticleItemResult> {
    return this.request('POST', '/article/detail', {
      body: req,
      ...options,
    });
  }

  // 点赞
  praise(req?: any, options?: STAHttpOptions): Observable<ArticleItemResult> {
    return this.request('POST', '/article/praise', {
      body: req,
      ...options,
    });
  }

  // 浏览
  browse(req?: any, options?: STAHttpOptions): Observable<ArticleItemResult> {
    return this.request('POST', '/article/browse', {
      body: req,
      ...options,
    });
  }
}
