import {Component} from '@angular/core';
import {UserModel} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {HttpService, IamUrls} from '../services/http.service';
import {ResponseModel} from '../model/response.model';
import {Router} from '@angular/router';
import {ErrorService} from '../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userInfo: UserModel = new UserModel();

  constructor(private httpService: HttpService, private routes: Router, private error: ErrorService) {
  }


  login() {
    this.httpService.request<ResponseModel<UserModel>>(IamUrls.loginUrl, this.userInfo).subscribe(user => {
      const promise = this.routes.navigate(['/']);
      promise.catch(reason => {
        this.error.newBusinessError('自动跳转失败');
      });
    });
  }
}


