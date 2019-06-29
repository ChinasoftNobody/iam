import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {TokenService} from './token.service';
import {ResponseModel} from '../model/response.model';
import {ErrorService} from './error.service';

export class Urls {
  domain: string;

  getDomain(): string {
    return this.domain;
  }
}

export class UrlConfig {
  constructor(url: string) {
    this.url = url;
    this.method = 'post';
  }

  url: string;
  method ? = 'post';
}

export class IamUrls extends Urls {
  static domain = 'http://localhost:8080/iam';
  static loginUrl: UrlConfig = new UrlConfig('/public/user/login');

}


@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private tokenService: TokenService, private error: ErrorService) {
  }

  /**
   * post 请求返回以json格式封装对象
   * @param urlConfig urlConfig
   * @param requestBody requestBody
   */
  request<T>(urlConfig: UrlConfig, requestBody: any): BehaviorSubject<T> {
    const url = IamUrls.domain + urlConfig.url;
    const resultSubject = new BehaviorSubject<T>(null);
    this.http.request<ResponseModel<T>>(urlConfig.method, url, {
      body: requestBody,
      observe: 'response',
      headers: {
        'IAM-TOKEN': this.tokenService.getToken()
      }
    }).
    subscribe(res => {
      const iamToken = res.headers.get(TokenService.tokenKey);
      if (iamToken) {
        this.tokenService.setToken(iamToken);
      }
      if (res && res.body && res.body.success) {
        resultSubject.next(res.body.result);
      } else {
        this.error.newBusinessError(res.body.error);
      }
    }, error1 => {
      this.error.newSystemError(error1);
    });
    return resultSubject;
  }
}
