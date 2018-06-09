import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BlogService {

  url: any;

  constructor(private http: HttpClient) { }

  getPosts(): any {
    this.url = '../../assets/blogdata.json';
    console.log('log url >> ' + this.url);
    return this.http.get(this.url);
  }

  // getBlogData(){
  //   console.log(JSON.parse(JSON.stringify(blogData)));
  //   return JSON.parse(JSON.stringify(blogData));
  // }

  // getData () {
  //   return this.http.get('../../assets/blogdata.json')
  //     .map((response: Response) => response.json());
  // }
}
