import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  signIn(){
    // sign in using firebase auth (might take parameter it is unknoun at this time)
  }
  signOut(){
    // using firebase auth
  }
}
