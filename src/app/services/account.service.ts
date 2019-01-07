import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  
  updateAccount(user:User){
    // code to update firestore doccument with id given in student
  }
  deleteAccount(id:string){
    // code to delete doccument with doc id given
  }
}
