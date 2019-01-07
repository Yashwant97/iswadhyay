import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project:Project
  constructor() { }

  ngOnInit() {
    this.project=null
    // code to get project with id taken from url and fetch from firestore using function
    // in project service 
  }

}
