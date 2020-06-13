import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Audit } from './audit';
@Injectable({
  providedIn: 'root'
})
export class AuditService {

  selectedAudit : Audit;
  lesAudit: Audit[];
  subAudit: Audit[];
  readonly base  = 'http://localhost:3000/api/audit';

  constructor(private http: HttpClient) { }
  
  postAudit(audit : Audit){
    return this.http.post(this.base, audit);
  }

 
  //retrieving audits
  getAuditList(){
    return this.http.get('http://localhost:3000/api/audit');
  }

  putAudit(audit : Audit){
    return this.http.put(this.base +`/${audit._id}`,audit);
  }

  getAuditSub(){
    return this.http.get('http://localhost:3000/api/audit/sub');
  }

  SubmitAudit(audit : Audit){
    return this.http.put('http://localhost:3000/api/audit/sub' +`/${audit._id}`,audit);
  }

}
