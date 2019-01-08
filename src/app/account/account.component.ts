import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';
import { Skill } from '../models/skill.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user=new User()
  constructor(private accountservice:AccountService) {
   }

  ngOnInit() {
    this.accountservice.getUserProfile().subscribe(result=>{
      if(result){
        this.user=result
      }
      console.log(this.user)
    })
    

  }
  save(){
    console.log('inside save')
    console.log(this.user)
    this.accountservice.updateAccount(this.user)
  }
  addSkill(form:NgForm){
    this.user.skills.push(form.value)
  }
  addEducation(form:NgForm){
    this.user.education.push(form.value)
  }
  addExperience(form:NgForm){
    this.user.experience.push(form.value)
  }

}
