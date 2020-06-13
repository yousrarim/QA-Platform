import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Css } from './css';
@Injectable({
  providedIn: 'root'
})
export class CssService {

  selectedCss : Css;
  lesCss: Css[];
  subCss: Css[];
  readonly base  = 'http://localhost:3000/api/css';

  constructor(private http: HttpClient) { }

  postCss(css : Css){
    return this.http.post(this.base, css);
  }

 
  //retrieving Csss
  getCssList(){
    return this.http.get('http://localhost:3000/api/css');
  }

  getSubCSS(){
    return this.http.get('http://localhost:3000/api/css/sub');
  }

  putCss(css : Css){
    return this.http.put(this.base +`/${css._id}`,css);
  }

  SubmitCss(css : Css){
    return this.http.put('http://localhost:3000/api/css/sub' +`/${css._id}`,css);
  }
}
