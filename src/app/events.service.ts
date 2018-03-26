import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from './event';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EventsService {
  url = 'http://dev.tymy.cz/api/events?login=simon&password=605323511';
  data: any;
  constructor(private http: HttpClient) { }

  getEvents(): any {
    return this.http.get(this.url);
  }

  processData(data: any) {

  }
}
