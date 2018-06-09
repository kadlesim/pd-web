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
    this.playersService.getPlayers()
      .subscribe(data => this.players = {
        data: data['data']
      }.data);
    console.log('shoePlayers');
  }



  showPlayers() {
    console.log(this.players);
    return true;
  }

}
