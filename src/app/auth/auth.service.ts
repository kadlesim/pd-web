import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import {User} from "./user"

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  loginBool: boolean;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(user: User){
    //zatim dummy / problem s async
    //passwd = 47ec2dd791e31e2ef2076caf64ed9b3d, user: test
    if (user.username === 'test' && user.password === '47ec2dd791e31e2ef2076caf64ed9b3d' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/media']);
      this.loginBool = true;
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    this.loginBool = false;
  }

  // getApiRespose(user: User): any {
  //   const url = 'http://pd.tymy.cz/api/login/' + user.username + '/' + user.password;
  //
  //   return this.http.get(url);
  // }

}
