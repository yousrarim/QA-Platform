import { Component, OnInit } from '@angular/core';
import { PinService } from 'src/app/services/pin/pin.service';
import { Pin } from 'src/app/services/pin/pin';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/services/projet/project';
import { ProjectService } from 'src/app/services/projet/project.service';

@Component({
  selector: 'app-updatepin',
  templateUrl: './updatepin.component.html',
  styleUrls: ['./updatepin.component.scss']
})
export class UpdatepinComponent implements OnInit {
  searchText:string;
  p=1;
  clicked:false;
  status=['open', 'closed','canceled'];
  sources=['CES','CSS','AUDIT','Pass Gate','PDRI','Value plus-Sustainability plus'];
  constructor(
    public toastr: ToastrService,
    public projectService: ProjectService,
    public pinService: PinService) { 
  
}

  ngOnInit() {
    this.refreshPinCList();
    this.refreshPinOList();
    this.refreshProjectList();
  }
  
  refreshProjectList(){
    this.projectService.getProjectList().subscribe((res)=>{
      this.projectService.projects = res as Project[];
    })
  }
  onEdit(pin : Pin){
    this.pinService.selectedpin= pin;
   }

   onSubmit(form : NgForm) {
    
    
    this.pinService.putPin(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
      this.refreshPinOList(); 

      this.refreshPinCList();
    this.toastr.success('The pin has been updated succesfully !', 'Success');
     
    this.refreshPinOList(); 

    this.refreshPinCList();
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
  refreshPinOList(){
    this.pinService.getPinOList().subscribe((res)=>{
      this.pinService.pinso = res as Pin[];
    })
  }
  refreshPinCList(){
    this.pinService.getPinCList().subscribe((res)=>{
      this.pinService.pinsc = res as Pin[];
    })
  }

  

   closePin(pin) {
     
    this.pinService.putPin(pin).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.toastr.success('Value plus & Sustainability plus have been updated successfully !', 'Success');
     
    this.refreshPinOList(); 
    this.refreshPinCList();
  }}

