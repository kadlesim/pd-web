import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BlogPostService {

  url: any;

  constructor(private http: HttpClient) { }

  getPost(): any {
    this.url = '../../assets/blogdata.json';
    console.log('log url >> ' + this.url);
    return this.http.get(this.url);
  }

}
