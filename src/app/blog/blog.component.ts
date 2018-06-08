import { Component, OnInit } from '@angular/core';
import {EventsService} from '../evetnts/events.service';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  news: any;
  data: any;

  newsLoaded: boolean;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.newsLoaded = true;
  }



  showNews() {
    if (this.newsLoaded) {
      // console.log(this.blogService.getNews());
      this.blogService.getNews()
        .subscribe(data => this.data = {
          data: data
        });
      console.dir(this.data);
      this.newsLoaded = false;
    }
    console.log('showNews');
    console.log(this.data);
    // this.news = this.data.data;
    return true;
  }

}
