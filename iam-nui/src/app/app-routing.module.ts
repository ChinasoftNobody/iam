import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {LoginInterceptor} from './services/login-interceptor.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home', canActivate: [LoginInterceptor]},
  {path: 'home', component: HomeComponent, canActivate: [LoginInterceptor]},
  {path: 'login', component: LoginComponent, canActivate: [LoginInterceptor]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginInterceptor]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
