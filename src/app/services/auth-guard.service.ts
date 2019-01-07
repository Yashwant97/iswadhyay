import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }
  canActivate() {
      if ( this.authService.isLoggedIn() ) {
          console.log('true')
          return true;
      }
      this.router.navigate(['/signin']);
      console.log('false')
      return false;
  }
}

