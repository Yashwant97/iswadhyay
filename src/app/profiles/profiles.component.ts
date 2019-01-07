import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ProfileService } from '../services/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  mode='list' // switch between allprofiles and single profile
  users:User[]
  user:User // user whose profile is to be shown
  constructor(private profileservice:ProfileService) { 
    console.log(this.users)
  }

  ngOnInit() {
    // code to get all users using user service and subscribe result to users array
  this.profileservice.getAllProfiles().subscribe(result=>{
    this.users=result;
  })
    
  }

  viewProfile(item:User){
    this.user=item
    this.mode='profile'
  }
  
  viewAll(){
    this.mode='list'
  }  


}
