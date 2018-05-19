import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from './event';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class EventsService {
  passwd = "605323511";
  url = 'http://pd.tymy.cz/api/events?login=simon&password=605323511';
  data: any;
  constructor(private http: HttpClient, /*private md5: Md5*/) { }

  getEvents(): any {
    this.url = 'http://pd.tymy.cz/api/events?login=simon&password=' + '605323511';
    return this.http.get(this.url);
  }

  processData(data: any) {

  }
}
