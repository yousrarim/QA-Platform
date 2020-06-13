import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VS } from './vs';

@Injectable({
  providedIn: 'root'
})
export class VsService {

  
  selectedVS : VS;
  lesVS: VS[];
  subVS: VS[];
  readonly base  = 'http://localhost:3000/api/vs';

  constructor(private http: HttpClient) { }

  postVS(VS : VS){
    return this.http.post(this.base, VS);
  }

 
  //retrieving VSs
  getVSList(){
    return this.http.get('http://localhost:3000/api/vs');
  }

  putVS(VS : VS){
    return this.http.put(this.base +`/${VS._id}`,VS);
  }

  getVSSub(){
    return this.http.get('http://localhost:3000/api/vs/sub');
  }

  SubmitVS(VS : VS){
    return this.http.put('http://localhost:3000/api/vs/sub' +`/${VS._id}`,VS);
  }
}
