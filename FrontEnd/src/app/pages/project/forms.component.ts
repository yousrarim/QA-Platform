import { Component, OnInit , ViewChild, HostListener, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjectService} from 'src/app/services/projet/project.service';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/services/projet/project';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers: [ProjectService]
})
export class FormsComponent implements OnInit {

p:number=1;
submitted = false;
searchText:string;
BusinessUnits=["Mining & Industry","Building & Infrastructure","Asset Management", "Advisory"];
Programs=["FEED","Fertilizers","Acids","Mining & Treatement","Energy","PMC Axe Sud","PMC Central Axe","Sustainable Capitals","Maintenance","B&I"];
Scope=["EPC","EPCm","EPCM","EPCC","PMC","Engineering"];
Contract_Type=["Lump Sum","Cost plus","TIME & Materials","Unit Pricing"];
Location=["Laayoune","Jorf Lasfar","Safi","Khribga"];
Client=["OCP", "OCP/PHOSBOUCRAA"];



  public phases: { [key: string]: Object; }[] = [
        { Name: 'Feasability' , id:'f'},
        { Name: 'Conceptual' , id: 'cc'},
        { Name: 'Basic Engineering', id:'b' },
        { Name: 'Detailed Engineering',id:'d' },
        { Name: 'Construction' ,id:'cs'},
        { Name: 'Commissionning', id:'cm' },
        { Name: 'Close-out', id:'cl' },    
    ];

    // maps the local data column to fields property
    public localFields: Object = { text: 'Name', value: 'id' };
    // set the placeholder to MultiSelect input element
    public localWaterMark: string = 'Select the phase(s) ';
 
  constructor(public projectService: ProjectService, public toastr: ToastrService) { }

 

 

  ngAfterViewInit() {
  }




  ngOnInit() {
    this.resetForm();
    this.refreshProjectList();
    
      
    
  }


  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.projectService.selectedProject={
            _id : "",
          p_name :  "",
          p_manager:  "",
          qa_name: "",
          phase: "",
          business_unit: "",
          program: "",
          contract_value: "",
          scope: "",
          type_contract: "",
          location: "",
          client: ""
    }
  }

  onSubmit(form : NgForm) {
    if(form.value._id == ""){
    this.projectService.postProject(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.resetForm(form);
    this.refreshProjectList();
    
    this.toastr.success('The project has been saved succesfully !', 'Success');
    }
    else{
      
    this.projectService.putProject(form.value).subscribe(
      {next: data => console.log('Success'), error: error => console.error('There was an error!', error) }
      );
    this.resetForm(form);
    this.refreshProjectList();
    
    this.toastr.success('The project has been updated succesfully !', 'Success');
    }
 }

 refreshProjectList(){
   this.projectService.getProjectList().subscribe((res)=>{
     this.projectService.projects = res as Project[];
   })
 }

 onEdit(proj : Project){
  this.projectService.selectedProject = proj;

 }

 

}
