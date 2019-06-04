import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {

  isLogin(): boolean {
    // TODO 默认认为已登录，这里后续做校验
    return false;
  }

  getToken(): string {
    return '';
  }
}
