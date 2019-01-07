import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]
  constructor() { }

  ngOnInit() {
    // use project service function to fetch all projects and subscribe it to projects array 
  }

}
