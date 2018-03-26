import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {EventsService} from "./evets.service";
import {Event} from "./event";
import {log} from "util";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pd';

  observableEvents: Observable<Event[]>
  events: Event[];
  errorMessage: String;
  constructor(private eventService: EventsService) { }
  ngOnInit(): void {
    this.observableEvents = this.eventService.getEventsWithObservable();
    this.observableEvents.subscribe(
      events => this.events = events,
      error =>  this.errorMessage = <any>error);
    log(this.events[0].caption);
    log('sem tu');
  }
}
