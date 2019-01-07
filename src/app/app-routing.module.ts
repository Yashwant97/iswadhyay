import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  { path:'', component:ProfilesComponent, canActivate:[AuthGuardService]},
  { path:'signin', component:SigninComponent },
  { path:'signup', component:SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
