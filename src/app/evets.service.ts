import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./event";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class EventsService {
  url = "http://dev.tymy.cz/api/events";
  constructor(private http:HttpClient) { }

  getEventsWithObservable(): Observable<Event[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
