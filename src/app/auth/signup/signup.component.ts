import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  signup(form:NgForm){
    console.log(form.value)
    this.auth.signUpRegular(form.value.email,form.value.password)
  }
  signin(){
    this.router.navigate(['/signin'])
  }

}
