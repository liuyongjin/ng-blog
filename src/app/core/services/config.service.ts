import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_CONFIG } from '@app/constant';
import { Observable } from 'rxjs';

import { Config } from '../interface/config';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(
    @Inject('BASE_CONFIG') private config: BASE_CONFIG,
    private http: HttpClient
  ) {}
  //获取详情
  getConfig(): Observable<Config> {
    return this.http.post<Config>(`${this.config.base_url}/config/index`, {});
  }
}
