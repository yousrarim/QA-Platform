import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projet/project.service';
import { ToastrService } from 'ngx-toastr';
import { CesService } from 'src/app/services/ces/ces.service';
import { CssService } from 'src/app/services/css/css.service';
import { AuditService } from 'src/app/services/audit/audit.service';
import { PdriService } from 'src/app/services/pdri/pdri.service';
import { PgcrrService } from 'src/app/services/pgcrr/pgcrr.service';
import { VsService } from 'src/app/services/vs/vs.service';
import { Project } from 'src/app/services/projet/project';
import { NgForm } from '@angular/forms';
import { Ces } from 'src/app/services/ces/ces';
import { Css } from 'src/app/services/css/css';
import { Audit } from 'src/app/services/audit/audit';
import { Pgcrr } from 'src/app/services/pgcrr/pgcrr';
import { Pdri } from 'src/app/services/pdri/pdri';
import { VS } from 'src/app/services/vs/vs';
@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.scss']
})
export class UpdateActivityComponent implements OnInit {
  searchText:string;
  p=1;
  projects=[];
  results=['Pass','Conditional Pass', 'Fail'];
  types=['SOP', 'Discipline'];
  auditname=['Construction Audit','Functional Audit (Contract Management)','Functional Audit (Doc Control)','Functional Audit (Field QA/QC)', 'Functional Audit (Project Controls)','Functional Audit (Project Management)','Functional Audit (Supply Chain Management)','Initiation Audit','SOP Audit 30%','SOP Audit 60%','SOP Audit 90%','Technical Audit'];
  typepg=['Pass Gate A','CRR1','Pass Gate C','CRR2','CRR3','CRR4'];
  typepdri=['PDRI1','PDRI2','PDRI2i','PDRI3'];

discipline:[];
list:[];  
scores =[3.00, 2.85, 2.75, 2.65, 2.55, 2.45, 2.35, 2.25, 2.15, 2.00, 1.00, 0.00 ];
  showcss: boolean = false;
  showces: boolean = false;
  showaudit: boolean = false;
  showpgcrr: boolean = false;
  showpdri: boolean = false;
  showv: boolean = false;
  shows: boolean = false;


  toggleCes(){
      this.showces = true;
      this.showaudit= false;
      this.showcss=false;
      this.showpdri=false;
      this.showpgcrr=false;
      this.showv=false;
      this.shows=false;   
  }
  toggleCss(){
    this.showcss = true;
    this.showaudit= false;
    this.showces=false;
    this.showpdri=false;
    this.showpgcrr=false;
    this.showv=false;
    this.shows=false;   
}
toggleaudit(){
  this.showcss = false;
  this.showaudit= true;
  this.showces=false;
  this.showpdri=false;
  this.showpgcrr=false;
  this.showv=false;
  this.shows=false;   
}
togglepgcrr(){
  this.showcss = false;
  this.showaudit= false;
  this.showces=false;
  this.showpdri=false;
  this.showpgcrr=true;
  this.showv=false;
  this.shows=false;   
}
togglepdri(){
  this.showcss = false;
  this.showaudit= false;
  this.showces=false;
  this.showpdri=true;
  this.showpgcrr=false;
  this.showv=false;
  this.shows=false;   
}
togglev(){
  this.showcss = false;
  this.showaudit= false;
  this.showces=false;
  this.showpdri=false;
  this.showpgcrr=false;
  this.showv=true;
  this.shows=false;   
}
toggles(){
  this.showcss = false;
  this.showaudit= false;
  this.showces=false;
  this.showpdri=false;
  this.showpgcrr=false;
  this.showv=false;
  this.shows=true;   
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
      this.refreshCESList();
      this.refreshCESSub();
      this.refreshCSSList();
      this.refreshAuditsub();
      this.refreshPdriSub();
      this.refreshPgcrrsub();
      this.refreshVSSub();
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
  if(form.value._id == ""){
    
    
    this.toastr.error('SELECT AN ACTIVITY WHICH IS ALREADY PLANNED !', 'ERROR');
    }
    else{

    this.cesService.SubmitCes(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    
    this.toastr.success('CES has been updated succesfully !', 'Success');
    this.resetFormCES(form);
    this.refreshCESList();
    this.refreshCESSub();
 }
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

refreshCESList(){
  this.cesService.getCesList().subscribe((res)=>{
    this.cesService.lesces = res as Ces[];
  })
}
refreshCESSub(){
  this.cesService.getCesSub().subscribe((res)=>{
    this.cesService.submittedces = res as Ces[];
  })
}


onEdit(ces : Ces){
 this.cesService.selectedCes = ces;
}

  //css service
  onSubmitCSS(form : NgForm) {
    if(form.value._id == ""){
    
    
      this.toastr.error('SELECT AN ACTIVITY WHICH IS ALREADY PLANNED !', 'ERROR');
      }
      else{
    this.cssService.SubmitCss(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.toastr.success('CSS has been planned successfully !', 'Success');
    this.resetFormCSS(form);  
    this.refreshCSSList();
 }}

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
    client_interviewed: "",
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

refreshCSSList(){
  this.cssService.getSubCSS().subscribe((res)=>{
    this.cssService.subCss = res as Css[];
  })
}
onEditcss(css : Css){
  this.cssService.selectedCss = css;
 }

  //audit service
  onSubmitAUDIT(form : NgForm) {
    if(form.value._id == ""){
    
    
      this.toastr.error('SELECT AN ACTIVITY WHICH IS ALREADY PLANNED !', 'ERROR');
      }
      else{
    this.auditService.SubmitAudit(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.toastr.success('Audit has been updated successfully !', 'Success');
    this.resetFormAUDIT(form); 
    this.refreshAuditsub(); 
 }}

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
refreshAuditsub(){
  this.auditService.getAuditSub().subscribe((res)=>{
    this.auditService.subAudit = res as Audit[];
  })
}

onEditaudit(Audit : Audit){
 this.auditService.selectedAudit = Audit;
}

//pgcrr service
onSubmitPGCRR(form : NgForm) {
  if(form.value._id == ""){
    this.toastr.error('SELECT AN ACTIVITY WHICH IS ALREADY PLANNED !', 'ERROR');
    }
    else{
  this.pgcrrService.SubmitPgcrr(form.value).subscribe(
    {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
    );
  this.toastr.success('PG/CRR has been updated successfully !', 'Success');
  this.resetFormPGCRR(form);  
  this.refreshPgcrrsub();
}}

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
refreshPgcrrsub(){
  this.pgcrrService.getPgcrrSub().subscribe((res)=>{
    this.pgcrrService.subPgcrr = res as Pgcrr[];
  })
}

onEditpgcrr(Pgcrr : Pgcrr){
 this.pgcrrService.selectedPgcrr = Pgcrr;
}


//pdri service
onSubmitPDRI(form : NgForm) {
  if(form.value._id == ""){
    
    
    this.toastr.error('SELECT AN ACTIVITY WHICH IS ALREADY PLANNED !', 'ERROR');
    }
    else{ 
  this.pdriService.SubmitPdri(form.value).subscribe(
    {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
    );
  this.toastr.success('PDRI has been updated successfully !', 'Success');
  this.resetFormPDRI(form); 
  
  this.refreshPdriSub();

}}

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

refreshPdriList(){
  this.pdriService.getPdriList().subscribe((res)=>{
    this.pdriService.lesPdri = res as Pdri[];
  })
}
refreshPdriSub(){
  this.pdriService.getPdriSub().subscribe((res)=>{
    this.pdriService.subPdri = res as Pdri[];
  })
}

onEditpdri(Pdri : Pdri){
 this.pdriService.selectedPdri = Pdri;
}

//VS service
onSubmitVS(form : NgForm) {
  if(form.value._id == ""){
    
    
    this.toastr.error('SELECT AN ACTIVITY WHICH IS ALREADY PLANNED !', 'ERROR');
    }
    else{  
  this.VSService.SubmitVS(form.value).subscribe(
    {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
    );
  this.toastr.success('Value plus & Sustainability plus have been updated successfully !', 'Success');
  this.resetFormVS(form); 
  this.refreshVSSub(); 
}}

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
refreshVSList(){
  this.VSService.getVSList().subscribe((res)=>{
    this.VSService.lesVS = res as VS[];
  })
}

refreshVSSub(){
  this.VSService.getVSSub().subscribe((res)=>{
    this.VSService.subVS = res as VS[];
  })
}

onEditVS(VS : VS){
 this.VSService.selectedVS = VS;
}
 
  
}
