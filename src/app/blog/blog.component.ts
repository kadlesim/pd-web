import {Component, OnInit} from '@angular/core';
import {BlogService} from './blog.service';
import {Observable} from "rxjs/Observable";
import {Blog} from "./blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  postsLoaded: boolean;

  posts: any;
  data: any;

  constructor(private blogService: BlogService) {

  }

  ngOnInit() {
    this.blogService.getPosts()
      .subscribe(data => this.posts = {
        data: data['data']
      }.data);
    console.log('showPosts');
  }

  showPosts() {
    console.log(this.posts);
    return true;
  }

}
