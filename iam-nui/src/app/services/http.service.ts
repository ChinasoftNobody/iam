import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {TokenService} from './token.service';

export class Urls {
  domain: string;

  getDomain(): string {
    return this.domain;
  }
}

export class IamUrls extends Urls {
  static domain = 'http://localhost:8081';
  static loginUrl: UrlConfig = {url: '/public/user/login'};

}

export class UrlConfig {
  url: string;
  method ? = 'post';
}


@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  request<R>(urlConfig: UrlConfig, body: any): Observable<R> {
    const url = IamUrls.domain + urlConfig.url;
    return this.http.request<R>(urlConfig.method, url, {
      body: {body},
      headers: {
        'IAM-TOKEN': this.tokenService.getToken()
      }
    });
  }
}
