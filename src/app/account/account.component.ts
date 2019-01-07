import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';
import { Skill } from '../models/skill.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user=new User()
  skill=new Skill()
  education=new Education()
  experience=new Experience()
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
  addSkill(){
    this.user.skills.push(Object.assign({},this.skill))
    this.skill=new Skill()
  }
  addEducation(){
    this.user.education.push(Object.assign({},this.education))
    this.education=new Education()
  }
  addExperience(){
    this.user.experience.push(Object.assign({},this.experience))
    this.experience=new Experience()
  }

}
