import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: AngularFirestore) { }
  getAllProfiles(){
    // code to get all profile from firebase
    let users=this.db.collection('users').valueChanges();
    return users;

  }
  getProfileById(id:string){
    // code to get profile by doc id
    let user = this.db.collection('users').doc(id).valueChanges();
    return user;
  }
}
