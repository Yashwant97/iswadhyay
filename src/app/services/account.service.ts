import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private db : AngularFirestore) { }
  
  updateAccount(user:User){
    // code to update firestore doccument with id given in student
    
  }
  deleteAccount(id:string){
    // code to delete doccument with doc id given
    this.db.collection('users').doc(id).delete();

  }
}
