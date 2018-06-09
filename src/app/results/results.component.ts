import { Component, OnInit } from '@angular/core';
import {ResultsService} from "./results.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  sezona06: any;
  sezona07: any;
  sezona08: any;
  sezona09: any;
  sezona10: any;
  sezona11: any;
  sezona12: any;
  sezona13: any;
  sezona14: any;
  sezona15: any;
  sezony: any[];
  constructor(private resultService: ResultsService) { }

  ngOnInit() {
    this.resultService.getSezona06()
      .subscribe(data => this.sezona06 = {
        data: data['data']
      }.data);
    this.resultService.getSezona07()
      .subscribe(data => this.sezona07 = {
        data: data['data']
      }.data);
    this.resultService.getSezona08()
      .subscribe(data => this.sezona08 = {
        data: data['data']
      }.data);
    this.resultService.getSezona09()
      .subscribe(data => this.sezona09 = {
        data: data['data']
      }.data);
    this.resultService.getSezona10()
      .subscribe(data => this.sezona10 = {
        data: data['data']
      }.data);
    this.resultService.getSezona11()
      .subscribe(data => this.sezona11 = {
        data: data['data']
      }.data);
    this.resultService.getSezona12()
      .subscribe(data => this.sezona12 = {
        data: data['data']
      }.data);
    this.resultService.getSezona13()
      .subscribe(data => this.sezona13 = {
        data: data['data']
      }.data);
    this.resultService.getSezona14()
      .subscribe(data => this.sezona14 = {
        data: data['data']
      }.data);
    this.resultService.getSezona15()
      .subscribe(data => this.sezona15 = {
        data: data['data']
      }.data);
    console.log('showPosts');
  }

  showHistory() {
    // console.log(this.posts);
    return true;
  }

}
