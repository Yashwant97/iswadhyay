import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profiles/profile/profile.component';
import { ProfileCardComponent } from './profiles/profile-card/profile-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ProfilesComponent,
    ProfileComponent,
    ProfileCardComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectCardComponent,
    AccountComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
