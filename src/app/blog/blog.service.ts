import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import xml2js from 'xml2js';

@Injectable()
export class BlogService {

  passwd: any;
  url = 'http://pd.tymy.cz/api/events?login=simon&password=605323511';
  data: any;
  constructor(private http: HttpClient) { }

  getNews(): any {
    this.url = 'http://pd.tymy.cz/?page=news&lang=CZ&pgno=%d&limit=10'/*Md5.hashStr("sem dat moje heslo")*/;
    console.log('log url >> ' + this.url);
    // console.log(this.http.get(this.url, {responseType: 'text'}));

    return this.http.get(this.url, {responseType: 'text'});
  }

  processData() {
  }
}
