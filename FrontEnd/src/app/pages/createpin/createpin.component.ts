import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Project } from 'src/app/services/projet/project';
import { PinService } from 'src/app/services/pin/pin.service';
import { ProjectService } from 'src/app/services/projet/project.service';
import { Pin } from 'src/app/services/pin/pin';
import { ToastrService } from 'ngx-toastr';
import { CesService } from 'src/app/services/ces/ces.service';
import { CssService } from 'src/app/services/css/css.service';
import { AuditService } from 'src/app/services/audit/audit.service';
import { PdriService } from 'src/app/services/pdri/pdri.service';
import { PgcrrService } from 'src/app/services/pgcrr/pgcrr.service';
import { VsService } from 'src/app/services/vs/vs.service';
import { Ces } from 'src/app/services/ces/ces';
import { Css } from 'src/app/services/css/css';
import { Pdri } from 'src/app/services/pdri/pdri';
import { Pgcrr } from 'src/app/services/pgcrr/pgcrr';
import { Audit } from 'src/app/services/audit/audit';
import { VS } from 'src/app/services/vs/vs';

@Component({
  selector: 'app-createpin',
  templateUrl: './createpin.component.html',
  styleUrls: ['./createpin.component.scss']
})
export class CreatepinComponent implements OnInit {

searchText:string;
p=1;    
sources=['CES','CSS','AUDIT','Pass Gate','PDRI','Value plus-Sustainability plus'];

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
        this.resetForm();  
    }
    toggleCss(){
      this.showcss = true;
      this.showaudit= false;
      this.showces=false;
      this.showpdri=false;
      this.showpgcrr=false;
      this.showv=false;
      this.shows=false;  
      this.resetForm(); 
  }
  toggleaudit(){
    this.showcss = false;
    this.showaudit= true;
    this.showces=false;
    this.showpdri=false;
    this.showpgcrr=false;
    this.showv=false;
    this.shows=false; 
    this.resetForm();  
  }
  togglepgcrr(){
    this.showcss = false;
    this.showaudit= false;
    this.showces=false;
    this.showpdri=false;
    this.showpgcrr=true;
    this.showv=false;
    this.shows=false;
    this.resetForm();   
  }
  togglepdri(){
    this.showcss = false;
    this.showaudit= false;
    this.showces=false;
    this.showpdri=true;
    this.showpgcrr=false;
    this.showv=false;
    this.shows=false; 
    this.resetForm();  
  }
  togglev(){
    this.showcss = false;
    this.showaudit= false;
    this.showces=false;
    this.showpdri=false;
    this.showpgcrr=false;
    this.showv=true;
    this.shows=false; 
    this.resetForm();  
  }
  toggles(){
    this.showcss = false;
    this.showaudit= false;
    this.showces=false;
    this.showpdri=false;
    this.showpgcrr=false;
    this.showv=false;
    this.shows=true;  
    this.resetForm(); 
  }
    
    constructor(public projectService: ProjectService,
      public toastr: ToastrService,
      public pinService: PinService,
       
    public cesService: CesService, 
    public cssService: CssService,
    public auditService : AuditService,
    public pdriService: PdriService,
    public pgcrrService: PgcrrService,
    public VSService : VsService) { 
    
  }

  ngOnInit() {
    this.resetForm();
    this.refreshProjectList();
    this.resetForm();
    this.refreshPinOList();
    this.refreshAuditsub();
  this.refreshCESSub();
this.refreshCSSList();
this.refreshPdriSub();
this.refreshPgcrrsub();
this.refreshVSSub(); }

 

  refreshProjectList(){
    this.projectService.getProjectList().subscribe((res)=>{
      this.projectService.projects = res as Project[];
    })
  }
  refreshCESSub(){
    this.cesService.getCesSub().subscribe((res)=>{
      this.cesService.submittedces = res as Ces[];
    })
  }
  refreshCSSList(){
    this.cssService.getSubCSS().subscribe((res)=>{
      this.cssService.subCss = res as Css[];
    })
  }
  refreshAuditsub(){
    this.auditService.getAuditSub().subscribe((res)=>{
      this.auditService.subAudit = res as Audit[];
    })
  }
  refreshPgcrrsub(){
    this.pgcrrService.getPgcrrSub().subscribe((res)=>{
      this.pgcrrService.subPgcrr = res as Pgcrr[];
    })
  }
  refreshPdriSub(){
    this.pdriService.getPdriSub().subscribe((res)=>{
      this.pdriService.subPdri = res as Pdri[];
    })
  }

refreshVSSub(){
  this.VSService.getVSSub().subscribe((res)=>{
    this.VSService.subVS = res as VS[];
  })
}


  onEdit(pin : Pin){
    this.pinService.selectedpin= pin;
   }
 
   onEditcss(css : Css){
this.pinService.selectedpin.p_name = css.p_name;
this.pinService.selectedpin.sourceid = css._id;
this.pinService.selectedpin.source = "CSS";
   }
   onEditces(ces : Ces){
    this.pinService.selectedpin.p_name = ces.p_name;
    this.pinService.selectedpin.sourceid = ces._id;
    this.pinService.selectedpin.source = "CES";
       }
   onEditpdri(pdri : Pdri){
        this.pinService.selectedpin.p_name = pdri.p_name;
        this.pinService.selectedpin.sourceid = pdri._id;
        this.pinService.selectedpin.source = "PDRI";
           }

  onEditpgcrr(pgcrr : Pgcrr){
        this.pinService.selectedpin.p_name = pgcrr.p_name;
        this.pinService.selectedpin.sourceid = pgcrr._id;
        this.pinService.selectedpin.source = "Pass Gate";
           }
 onEditaudit(audit : Audit){
            this.pinService.selectedpin.p_name = audit.p_name;
            this.pinService.selectedpin.sourceid = audit._id;
            this.pinService.selectedpin.source = "Audit";
               }
 onEditVS(VS : VS){
                this.pinService.selectedpin.p_name = VS.p_name;
                this.pinService.selectedpin.sourceid = VS._id;
                this.pinService.selectedpin.source = "VS";
                   }
  

   onSubmit(form : NgForm) {
    
    this.pinService.postPin(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.resetForm(form);
    
    this.toastr.success('The pin has been saved succesfully !', 'Success');
    this.refreshPinOList();
    
  }
  
  refreshPinOList(){
    this.pinService.getPinOList().subscribe((res)=>{
      this.pinService.pinso = res as Pin[];
    })
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
      
    this.pinService.selectedpin={
    _id : "",
    p_name :  "",
    source: "",
    sourceid: "",
    rating: null,
    closed_date: "",
    category: "",
    conducted_by:"",
    description:"",
    root_causes:"",
    action_what:"",
    action_whom:"",
    action_when:"",
    comments:"",
    status:"",
         
    }
  }
}
