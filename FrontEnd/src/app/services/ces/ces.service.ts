import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Ces } from './ces';

@Injectable({
  providedIn: 'root'
})
export class CesService {

  selectedCes : Ces;
  lesces: Ces[];
  submittedces: Ces[];
  readonly base  = 'http://localhost:3000/api/ces';

  constructor(private http: HttpClient) { }

  postCes(ces : Ces){
    return this.http.post(this.base, ces);
  }

 
 SubmitCes(ces : Ces){
  return this.http.put('http://localhost:3000/api/ces/sub' +`/${ces._id}`,ces);
  }

 getCesSub(){
  return this.http.get('http://localhost:3000/api/ces/sub');
 }
  //retrieving Cess
  getCesList(){
    return this.http.get('http://localhost:3000/api/ces');
  }

  putCes(ces : Ces){
  return this.http.put('http://localhost:3000/api/ces' +`/${ces._id}`,ces);
  }

}
