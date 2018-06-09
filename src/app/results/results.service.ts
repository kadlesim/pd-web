import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ResultsService {

  constructor(private http: HttpClient) { }

  getSezona06(): any {
    const url = '../../assets/sezona2006.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }

  getSezona07(): any {
    const url = '../../assets/sezona2007.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }

  getSezona08(): any {
    const url = '../../assets/sezona2008.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }

  getSezona09(): any {
    const url = '../../assets/sezona2009.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }
  getSezona10(): any {
    const url = '../../assets/sezona2010.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }
  getSezona11(): any {
    const url = '../../assets/sezona2011.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }
  getSezona12(): any {
    const url = '../../assets/sezona2012.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }
  getSezona13(): any {
    const url = '../../assets/sezona2013.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }
  getSezona14(): any {
    const url = '../../assets/sezona2014.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }
  getSezona15(): any {
    const url = '../../assets/sezona2015.json';
    console.log('log url >> ' + url);
    return this.http.get(url);
  }


}
