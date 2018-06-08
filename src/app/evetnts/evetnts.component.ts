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
    this.eventsLoaded = true;
    // this.route.data
    //   .subscribe(data => this.data = {
    //     data: data['data']
    //   });
  }



  showEvents() {
    if (this.eventsLoaded) {
      this.eventService.getEvents()
        .subscribe(data => this.data = {
          data: data['data']
        });
      this.eventsLoaded = false;
    }
    console.log('showEvents');
    console.log(this.data.data);
    this.events = this.data.data;
    return true;
  }

  //
  // load(): void {
  //   // // console.log(this.dataE);
  //   // // log('' + this.events[0]);
  //   // this.showEvents();
  //   // this.events = this.data.data;
  //   //
  //   // console.log('sem tu');
  //   // console.log(this.data.data);
  //   //
  //   // console.log(this.events[0].caption);
  // }

}
