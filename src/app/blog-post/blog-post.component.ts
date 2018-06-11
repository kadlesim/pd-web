import {Component, OnInit} from '@angular/core';
import {Blog} from "../blog/blog";
import {ActivatedRoute} from "@angular/router";
import {BlogPostService} from "./blog-post.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  posts: any;
  post: any;
  path: any;
  title: any;
  image:any;
  text:any;

  constructor(private route: ActivatedRoute, private postService: BlogPostService) {
  }

  ngOnInit() {
    // this.path = this.route.snapshot.params['id'];
    this.title = this.route.snapshot.params['title'];
    this.image = this.route.snapshot.params['image'];
    this.text = this.route.snapshot.params['text'];
    this.postService.getPost().subscribe(posts => this.post = {
      data: posts['data']
    }.data[this.path]);
    console.log('showPost');
  }

  showPost() {
    console.log(this.post);
    return true;
  }
}
