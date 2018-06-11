import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  pd: boolean;
  history: boolean;
  constructor() { }

  ngOnInit() {
    this.pd = false;
    this.history = false;
  }

  showPDVecirek2017(){
    console.log('show pd vecirek 2017');
    this.pd = !this.pd;
    let x = document.getElementById('nadpisPD');
    if (x.style.borderBottomColor === "white" || x.style.borderBottomColor === "") {
      x.style.borderBottomColor = "darkred";
    } else {
      x.style.borderBottomColor = "white";
    }
  }

  showHistory(){
    console.log('show history');
    this.history = !this.history;
    let x = document.getElementById("nadpisHistorie");
    if (x.style.borderBottomColor === "white" || x.style.borderBottomColor === "") {
      x.style.borderBottomColor = "darkred";
    } else {
      x.style.borderBottomColor = "white";
    }
  }
}
