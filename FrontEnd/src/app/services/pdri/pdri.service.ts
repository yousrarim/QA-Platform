import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pdri } from './pdri';

@Injectable({
  providedIn: 'root'
})
export class PdriService {

  selectedPdri : Pdri;
  lesPdri: Pdri[];
  subPdri: Pdri[];
  readonly base  = 'http://localhost:3000/api/pdri';

  constructor(private http: HttpClient) { }
  postPdri(pdri : Pdri){
    return this.http.post(this.base, pdri);
  }

 
  //retrieving pdris
  getPdriList(){
    return this.http.get('http://localhost:3000/api/pdri');
  }

  putPdri(pdri : Pdri){
    return this.http.put(this.base +`/${pdri._id}`,pdri);
  }

  getPdriSub(){
    return this.http.get('http://localhost:3000/api/pdri/sub');
  }

  SubmitPdri(pdri : Pdri){
    return this.http.put('http://localhost:3000/api/pdri/sub' +`/${pdri._id}`,pdri);
  }
}
