import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  selectedProject : Project;
  projects: Project[];
  readonly baseURL = 'http://localhost:3000/api/project';

  constructor(private http: HttpClient) { }

  postProject(proj : Project){
    return this.http.post(this.baseURL, proj);
  }

 
  //retrieving projects
  getProjectList(){
    return this.http.get('http://localhost:3000/api/projects');
  }

  putProject(proj : Project){
    return this.http.put(this.baseURL +'/${proj._id}',proj);
  }
/*
  //add project
  addProject(newProject)
  {
    var headers = new HttpHeaders();
    headers.append('Content_Type', 'application/json');
    return this.http.post('http://loalhost:3000/api/project', newProject, {headers:headers}).map(res => res.json());
  }

  //delete project
  deteteProject(id)
  {
    return this.http.delete('http://localhost:3000/api/project/'+id)
    .map(res =>res.json());
  }*/


}
