///<reference path="../../../node_modules/@angular/common/src/pipes/date_pipe.d.ts"/>
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from './event';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Md5} from 'ts-md5/dist/md5';
import {DatePipe} from '@angular/common';


@Injectable()
export class EventsService {
  passwd: any;
  url = 'https://pd.tymy.cz/api/events?login=simon&password=605323511';
  data: any;
  constructor(private http: HttpClient) { }

  getEvents(): any {
    // const endTime = new Date().getFullYear() + '' + new Date().getMonth() + '' + new Date().getDate();
    const datePipe = new DatePipe('en-UK');
    const endTime = datePipe.transform(Date.now(), 'yyyyMMdd');
    console.log(endTime); /*Md5.hashStr("sem dat moje heslo")*/
    this.url = 'https://pd.tymy.cz/api/events?login=simon&password=' + 'e0fcb7fc608c79e69fdc99ff7050aa72&filter=endTime>' + endTime +  '&order=startTime&limit=10';
    // this.url = '../../assets/eventData.json'; //dummy data
    console.log('log url >> ' + this.url); // endTime<' + endTime + '
    console.log();

    return this.http.get(this.url);
  }

  processData(data: any) {

  }
}
