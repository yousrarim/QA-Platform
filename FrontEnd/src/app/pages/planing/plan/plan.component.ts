import { Component, OnInit } from '@angular/core';
import {ProjectService} from 'src/app/services/projet/project.service';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/services/projet/project';
import { VsService} from 'src/app/services/vs/vs.service';
import {CssService} from 'src/app/services/css/css.service';
import {AuditService} from 'src/app/services/audit/audit.service';
import {PdriService} from 'src/app/services/pdri/pdri.service';
import {PgcrrService} from 'src/app/services/pgcrr/pgcrr.service';
import {CesService} from 'src/app/services/ces/ces.service';
import {NgForm} from '@angular/forms';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  providers: [ProjectService, VsService, CesService, CssService, AuditService,PgcrrService,PdriService]
})


export class PlanComponent implements OnInit {
projects=[];
types=['SOP', 'Discipline'];
auditname=['Construction Audit','Functional Audit (Contract Management)','Functional Audit (Doc Control)','Functional Audit (Field QA/QC)', 'Functional Audit (Project Controls)','Functional Audit (Project Management)','Functional Audit (Supply Chain Management)','Initiation Audit','SOP Audit 30%','SOP Audit 60%','SOP Audit 90%','Technical Audit'];
typepg=['Pass Gate A','CRR1','Pass Gate C','CRR2','CRR3','CRR4'];
typepdri=['PDRI1','PDRI2','PDRI2i','PDRI3'];


  showcss: boolean = false;
  showces: boolean = false;
  showaudit: boolean = false;
  showpgcrr: boolean = false;
  showpdri: boolean = false;
  showv: boolean = false;
  

  
toggleCes(){
    this.showces = true;
    this.showaudit= false;
    this.showcss=false;
    this.showpdri=false;
    this.showpgcrr=false;
    this.showv=false;
       
}
toggleCss(){
  this.showcss = true;
  this.showaudit= false;
  this.showces=false;
  this.showpdri=false;
  this.showpgcrr=false;
  this.showv=false;
  
}
toggleaudit(){
this.showcss = false;
this.showaudit= true;
this.showces=false;
this.showpdri=false;
this.showpgcrr=false;
this.showv=false;

 }
togglepgcrr(){
this.showcss = false;
this.showaudit= false;
this.showces=false;
this.showpdri=false;
this.showpgcrr=true;
this.showv=false;
   
}
togglepdri(){
this.showcss = false;
this.showaudit= false;
this.showces=false;
this.showpdri=true;
this.showpgcrr=false;
this.showv=false;
  
}
togglev(){
this.showcss = false;
this.showaudit= false;
this.showces=false;
this.showpdri=false;
this.showpgcrr=false;
this.showv=true;
   
}
toggles(){
this.showcss = false;
this.showaudit= false;
this.showces=false;
this.showpdri=false;
this.showpgcrr=false;
this.showv=false;
   
}
  constructor(public projectService: ProjectService, 
              public toastr: ToastrService, 
              public cesService: CesService, 
              public cssService: CssService,
              public auditService : AuditService,
              public pdriService: PdriService,
              public pgcrrService: PgcrrService,
              public VSService : VsService) { }

  ngOnInit() {
    this.refreshProjectList();
    this.resetFormCES();
    this.resetFormCSS();
    this.resetFormAUDIT();
    this.resetFormPDRI();
    this.resetFormPGCRR();
    this.resetFormVS();
  
  }
  refreshProjectList(){
    this.projectService.getProjectList().subscribe((res)=>{
      this.projectService.projects = res as Project[];
    })
  }

  
  //ces service
onSubmitCES(form : NgForm) {
   
    this.cesService.postCes(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.toastr.success('CES has been planned successfully !', 'Success');
    this.resetFormCES(form);  
 }

 resetFormCES(form?: NgForm){
  if(form)
    form.reset();
    
  this.cesService.selectedCes={
    _id : "",
    p_name :  "",
    plan_date: null,
    forcasted_date: null,
    conducted_by: "",
    date_conducted: null,
    date_issued: null,
    client_interviewed: "",
    comments:  "",     
  }
}

  //css service
  onSubmitCSS(form : NgForm) {
   
    this.cssService.postCss(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.toastr.success('CSS has been planned successfully !', 'Success');
    this.resetFormCSS(form);  
 }

 resetFormCSS(form?: NgForm){
  if(form)
    form.reset();
    
  this.cssService.selectedCss={
    _id : "",
    p_name :  "",
    plan_date: null,
    forcasted_date: null,
    conducted_by: "",
    date_conducted: null,
    date_issued: null,
    client_interviewed:"",
    comments:  "", 
    score:null,
    saf:null,
    sco:null,
    com:null,
    tec:null,
    sta:null,
    sch:null,
    cos:null,
    fie:null,
    sup:null,
    man:null,    
  }
}

  //audit service
  onSubmitAUDIT(form : NgForm) {
   
    this.auditService.postAudit(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.toastr.success('Audit has been planned successfully !', 'Success');
    this.resetFormAUDIT(form);  
 }

 resetFormAUDIT(form?: NgForm){
  if(form)
    form.reset();
    
  this.auditService.selectedAudit={
    _id : "",
    p_name :  "",
    plan_date: null,
    forcasted_date: null,
    conducted_by: "",
    date_conducted: null,
    date_issued: null,
    audit_name:"",
    audit_type:"",
    discipline:"",
    comments:  "",
    score:null,    
  }
}

//pgcrr service
onSubmitPGCRR(form : NgForm) {
   
  this.pgcrrService.postPgcrr(form.value).subscribe(
    {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
    );
  this.toastr.success('PG/CRR has been planned successfully !', 'Success');
  this.resetFormPGCRR(form);  
}

resetFormPGCRR(form?: NgForm){
if(form)
  form.reset();
  
this.pgcrrService.selectedPgcrr={
  _id : "",
  p_name :  "",
  plan_date: null,
  forcasted_date: null,
  conducted_by: "",
  date_conducted: null,
  date_issued: null,
  comments:  "", 
  scope:"",
  result:"",  
  score:null, 
  type:"",   
}
}


//pdri service
onSubmitPDRI(form : NgForm) {
   
  this.pdriService.postPdri(form.value).subscribe(
    {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
    );
  this.toastr.success('PDRI has been planned successfully !', 'Success');
  this.resetFormPDRI(form);  
}

resetFormPDRI(form?: NgForm){
if(form)
  form.reset();
  
this.pdriService.selectedPdri={
  _id : "",
  p_name :  "",
  plan_date: null,
  forcasted_date: null,
  conducted_by: "",
  date_conducted: null,
  date_issued: null,
  comments:  "", 
  scope:"", 
  score:null,
  type:"",  
}
}


//VS service
onSubmitVS(form : NgForm) {
   
  this.VSService.postVS(form.value).subscribe(
    {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
    );
  this.toastr.success('Value plus & Sustainability plus have been planned successfully !', 'Success');
  this.resetFormVS(form);  
}

resetFormVS(form?: NgForm){
if(form)
  form.reset();
  
this.VSService.selectedVS={
    _id : "",
    p_name:"",
    target_v:null,
    new_target_s:null,
    target_s:null,
    new_target_v:null,
    discipline:"",
    originator:"",
    idea:"",
    comments:"",
    date_submitted:null,
    date_conducted:null,
    submitted_saving:null,
    pm_saving:null,
    client_saving:null,
    tco_saving:null,    
}
}

}
