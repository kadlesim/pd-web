import { Component, OnInit } from '@angular/core';
import {PlayersService} from './players.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any;
  data: any;
  women: boolean;
  open: boolean;
  mix: boolean;
  all: boolean;

  playersLoaded: boolean;
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.women = false;
    this.open = false;
    this.mix = false;
    this.all = true;
    this.playersService.getPlayers()
      .subscribe(data => this.players = {
        data: data['data']
      }.data);
    console.log('showPlayers');
  }



  showOpen() {
    console.log('show men');
    this.open = !this.open;
    if (this.open) {
      this.all = false;
      this.women = false;
      this.mix = false;
    }
    const o = document.getElementById('open-btn');
    if (this.open && (o.style.borderBottomColor === 'white' || o.style.borderBottomColor === '')) {
      o.style.borderBottomColor = 'darkred';
      document.getElementById('mix-btn').style.borderBottomColor = 'white';
      document.getElementById('women-btn').style.borderBottomColor = 'white';
    } else {
      o.style.borderBottomColor = 'white';
    }
  }
  showWomen() {
    console.log('show women');
    this.women = !this.women;
    if (this.women) {
      this.all = false;
      this.open = false;
      this.mix = false;
    }
    const x = document.getElementById('women-btn');
    if (this.women && (x.style.borderBottomColor === 'white' || x.style.borderBottomColor === '')) {
      x.style.borderBottomColor = 'darkred';
      document.getElementById('mix-btn').style.borderBottomColor = 'white';
      document.getElementById('open-btn').style.borderBottomColor = 'white';
    } else {
      x.style.borderBottomColor = 'white';
    }
  }

  showMix() {
    console.log('show mix');
    this.mix = !this.mix;
    if (this.mix) {
      this.all = false;
      this.open = false;
      this.women = false;
    }
    const x = document.getElementById('mix-btn');
    if (this.mix && (x.style.borderBottomColor === 'white' || x.style.borderBottomColor === '')) {
      x.style.borderBottomColor = 'darkred';
      document.getElementById('open-btn').style.borderBottomColor = 'white';
      document.getElementById('women-btn').style.borderBottomColor = 'white';
    } else {
      x.style.borderBottomColor = 'white';
    }
  }

  showAll() {
    console.log(this.players);
    return this.all;
  }
}
