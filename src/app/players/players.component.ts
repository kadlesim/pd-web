import { Component, OnInit } from '@angular/core';
import {PlayersService} from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any;
  data: any;

  playersLoaded: boolean;
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.playersLoaded = true;
  }

  showPlayers() {
    if (this.playersLoaded) {
      this.playersService.getPlayers()
        .subscribe(data => this.data = {
          data: data['data']
        });
      this.playersLoaded = false;
    }
    console.log('showPlayers');
    console.log(this.data.data);
    this.players = this.data.data;
    return true;
  }

}
