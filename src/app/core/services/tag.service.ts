import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TagResult } from '../interface/tag';
import { BaseService, STAHttpOptions } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TagService extends BaseService {
  // 获取标签列表(获取所有)
  getTag(req?: any, options?: STAHttpOptions): Observable<TagResult> {
    return this.request('POST', '/tag/index', {
      body: req,
      ...options,
    });
  }
}
