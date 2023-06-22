import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigResult } from '../interface/config';
import { BaseService, STAHttpOptions } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class ConfigService extends BaseService {
  // 获取详情
  getConfig(req?: any, options?: STAHttpOptions): Observable<ConfigResult> {
    return this.request('POST', '/config/index', {
      body: req,
      ...options,
    });
  }
}
