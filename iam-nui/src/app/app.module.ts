import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatBottomSheet, MatBottomSheetModule,
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {LoginInterceptor} from './services/login-interceptor.service';
import {TokenService} from './services/token.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import {ErrorService} from './services/error.service';
import {BottomSheetErrorComponent} from './common/common-error.component';
import {CookieService} from 'ngx-cookie-service';
import {AuthorityComponent} from './biz/authority/authority.component';
import {MemberComponent} from './biz/member/member.component';
import {ServiceComponent} from './biz/service/service.component';
import {LoginService} from './services/login.service';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, HeaderComponent, RegisterComponent, HomeComponent, BottomSheetErrorComponent, AuthorityComponent,
    MemberComponent, ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatBottomSheetModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule
  ],
  entryComponents: [BottomSheetErrorComponent],
  providers: [LoginInterceptor, TokenService, HttpService, ErrorService, CookieService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
