import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BASE_CONFIG } from '@app/constant';
import { Observable } from 'rxjs';

export interface STAOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
  baseUrl?: string;
}

export interface STAHttpOptions extends STAOptions {
  body?: any;
  params?: any;
  observe?: 'body' | 'events' | 'response';
  reportProgress?: boolean;
  context?: HttpContext;
}

export const STA_OPTIONS = new InjectionToken<STAOptions>('STA_OPTIONS', {
  factory: () => ({ withCredentials: false }),
});

@Injectable()
export class BaseService {
  readonly baseUrl: string = '';

  constructor(
    @Inject('BASE_CONFIG') private config: BASE_CONFIG,
    @Optional() @Inject(STA_OPTIONS) private globalOptions: STAOptions,
    protected http: HttpClient
  ) {
    this.baseUrl = this.config.base_url;
  }

  protected request<T, R>(
    method: string,
    path: string,
    options?: STAHttpOptions
  ): Observable<R> {
    const { headers, withCredentials, responseType, baseUrl } =
      this.globalOptions;
    options = { withCredentials, responseType, ...options };
    options.headers = new HttpHeaders({ ...headers, ...options.headers });
    const url = `${baseUrl ?? this.baseUrl}${path}`;
    return this.http.request(method, url, options);
  }
}
