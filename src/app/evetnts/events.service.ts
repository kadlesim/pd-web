import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from './event';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class EventsService {
  passwd: any;
  url = 'http://pd.tymy.cz/api/events?login=simon&password=605323511';
  data: any;
  constructor(private http: HttpClient) { }

  getEvents(): any {
    this.url = 'http://pd.tymy.cz/api/events?login=simon&password=' + 'e0fcb7fc608c79e69fdc99ff7050aa72'/*Md5.hashStr("sem dat moje heslo")*/;
    console.log("log url >> " + this.url);

    return this.http.get(this.url);
  }

  processData(data: any) {

  }
}
