import {Component} from '@angular/core';
import {UserModel} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userInfo: UserModel = {};

  constructor(private httpClient: HttpClient) {
  }


  login() {
    this.httpClient.post("", {},)
  }
}


