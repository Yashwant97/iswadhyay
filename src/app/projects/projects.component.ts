import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]
  selectedproject
  mode="list"
  constructor(private projectservice:ProjectService) { }

  ngOnInit() {
    // use project service function to fetch all projects and subscribe it to projects array 
    this.projectservice.getAllProjects().subscribe(res=>{
      this.projects=res
    })
  }
  viewProject(item:Project){
    this.selectedproject=item
    this.mode="projectdetails"
  }
  viewAll(){
    this.mode="list"
    this.selectedproject=null
  }

}
