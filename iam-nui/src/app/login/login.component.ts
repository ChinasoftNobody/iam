import {Component} from '@angular/core';
import {UserModel} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {HttpService, IamUrls} from '../services/http.service';
import {ResponseModel} from '../model/response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userInfo: UserModel = new UserModel();

  constructor(private httpService: HttpService) {
  }


  login() {
    this.httpService.request<ResponseModel<UserModel>>(IamUrls.loginUrl, this.userInfo).subscribe(user => {
      // console.log(user);
    }, error1 => {
      console.log(error1);
    });
  }
}


