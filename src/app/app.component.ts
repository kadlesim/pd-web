import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {EventsService} from './evetnts/events.service';
import {Event} from './evetnts/event';
import {log} from 'util';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pd';

  events: any;
  data: any;

  eventsLoaded: boolean;

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventsLoaded = true;
    // this.showEvents();
    // this.events = this.data.data;
  }

  showEvents() {
    if (this.eventsLoaded) {
      this.eventService.getEvents()
        .subscribe(data => this.data = {
          data: data['data']
        });
      this.eventsLoaded = false;
    }

    console.log("tuuuuu");
    this.events = this.data.data;
    return true;
  }

  load(): void {
    // console.log(this.dataE);
    // log('' + this.events[0]);
    this.showEvents();
    this.events = this.data.data;

    log('sem tu');
    console.log(this.data.data);

    console.log(this.events[0].caption);
  }
}
