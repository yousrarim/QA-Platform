import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pin } from './pin';
@Injectable({
  providedIn: 'root'
})
export class PinService {
  selectedpin : Pin;
  pins: Pin[];
  pinso: Pin[];
  pinsc: Pin[];
  submittedpin: Pin[];
  readonly base  = 'http://localhost:3000/api/pin';
  constructor(private http: HttpClient) { }

 

  postPin(pin : Pin){
    return this.http.post(this.base, pin);
  }
  getPinCList(){
    return this.http.get('http://localhost:3000/api/pin/closed');
  }
  getPinOList(){
    return this.http.get('http://localhost:3000/api/pin/open');
  }
 
  //retrieving pins
  getPinList(){
    return this.http.get('http://localhost:3000/api/pin');
  }

  putPin(pin : Pin){
    return this.http.put(this.base +`/${pin._id}`,pin);
  }

  




}
