import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private db : AngularFirestore,private auth:AuthService) { }
  
  updateAccount(user:User){
    // code to update firestore doccument with id given in student
    let uid = this.auth.getUid()
    console.log(Object.assign({},user))
    this.db.collection('users').doc(uid).set(Object.assign({},user))
    
  }
  deleteAccount(id:string){
    // code to delete doccument with doc id given
    let uid = this.auth.getUid()
    this.db.collection('users').doc(uid).delete();

  }
  getUserProfile(){
    let uid = this.auth.getUid()
    let user=this.db.collection('users').doc(uid).valueChanges()
    return user
  }
}
