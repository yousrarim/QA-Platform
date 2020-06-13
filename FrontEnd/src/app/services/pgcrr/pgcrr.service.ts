import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pgcrr } from './pgcrr';

@Injectable({
  providedIn: 'root'
})
export class PgcrrService {

  selectedPgcrr : Pgcrr;
  lesPgcrr: Pgcrr[];
  subPgcrr: Pgcrr[];
  readonly base  = 'http://localhost:3000/api/pgcrr';

  constructor(private http: HttpClient) { }
  postPgcrr(pgcrr : Pgcrr){
    return this.http.post(this.base, pgcrr);
  }

 
  //retrieving pgcrrs
  getPgcrrList(){
    return this.http.get('http://localhost:3000/api/pgcrr');
  }

  putPgcrr(pgcrr : Pgcrr){
    return this.http.put(this.base +`/${pgcrr._id}`,pgcrr);
  }


  getPgcrrSub(){
    return this.http.get('http://localhost:3000/api/pgcrr/sub');
  }

  SubmitPgcrr(pgcrr : Pgcrr){
    return this.http.put('http://localhost:3000/api/pgcrr/sub' +`/${pgcrr._id}`,pgcrr);
  }
}
