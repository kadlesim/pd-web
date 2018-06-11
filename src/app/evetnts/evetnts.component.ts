import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-evetnts',
  templateUrl: './evetnts.component.html',
  styleUrls: ['./evetnts.component.css']
})
export class EvetntsComponent  implements OnInit {
  events: any;
  data: any;

  eventsLoaded: boolean;

  constructor(private eventService: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(data => this.events = {
        data: data['data']
      }.data);
    console.log('showEvents');
  }

  goToUrl(url: any): void {
    // document.location.href = url;
    window.open(url);
  }


  showEvents() {
    console.log(this.events);
    return true;
  }
}
