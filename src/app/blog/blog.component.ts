import {Component, OnInit} from '@angular/core';
import {BlogService} from './blog.service';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
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

  constructor(private blogService: BlogService, private db: AngularFireDatabase) {

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
