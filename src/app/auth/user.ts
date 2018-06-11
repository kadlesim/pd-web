export class User {
  username: string;
  password: any;
  sessionKey: any;

  constructor(username:string,
              password:any){
    this.password = password;
    this.username = username;
  }
}
