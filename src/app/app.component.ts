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

  // events: any;
  // data: any;
  //
  // eventsLoaded: boolean;

  constructor() { }

  ngOnInit(): void {
    // this.eventsLoaded = true;
    // this.showEvents();
    // this.events = this.data.data;
  }
}
