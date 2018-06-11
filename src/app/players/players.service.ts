import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PlayersService {

  passwd: any;
  url = 'http://pd.tymy.cz/api/events?login=simon&password=605323511';
  data: any;
  constructor(private http: HttpClient) { }

  getPlayers(): any {
    // this.url = 'http://pd.tymy.cz/api/users?login=simon&password=' + 'e0fcb7fc608c79e69fdc99ff7050aa72'/*Md5.hashStr("sem dat moje heslo")*/;
    this.url = '../../assets/playersData.json'; //dummy data
    console.log('log url >> ' + this.url);

    return this.http.get(this.url);
  }
}
