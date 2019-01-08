import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectcollection:AngularFirestoreCollection
  constructor(private db:AngularFirestore) { 
    this.projectcollection=this.db.collection('projects')
  }
  getAllProjects(){
    let projects=this.projectcollection.valueChanges()
    return projects
  }
  getProjectById(id:string){
    let project = this.projectcollection.doc(id).valueChanges()
    return project
  }

}
