import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


import { EventsService } from './events.service';

@Injectable()
export class EventsResolver implements Resolve<any> {
  constructor(private es: EventsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.es.getEvents().pipe(
      // take(1),
      map(data => {
        if (data) {
          // console.log(data.data);
          return data;
        } else {
          return null;
        }
      })
    );
  }
}
