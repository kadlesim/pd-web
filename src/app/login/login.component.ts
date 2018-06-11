import { Component, OnInit } from '@angular/core';
import {User} from "../auth/user";
import {AuthService} from "../auth/auth.service";
import {Md5} from "ts-md5";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = new User("pes","kocka");
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  login(form){
    // console.dir(form.value);
    this.user.username = form.value.username;
    this.user.password = Md5.hashStr(form.value.password);
    console.log("user > ");
    console.log(this.user);
    this.authService.login(this.user);
    // this.isLoggedIn$ = this.authService.loginBool;
  }

  onLogout(){
    this.authService.logout();
  }

}
