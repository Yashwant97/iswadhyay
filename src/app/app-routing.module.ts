import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { AccountComponent } from './account/account.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  { path:'', component:ProfilesComponent, canActivate:[AuthGuardService]},
  { path:'profiles', component:ProfilesComponent, canActivate:[AuthGuardService]},
  { path:'projects', component:ProjectsComponent, canActivate:[AuthGuardService]},
  { path:'signin', component:SigninComponent },
  { path:'signup', component:SignupComponent },
  { path:'account', component:AccountComponent, canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
