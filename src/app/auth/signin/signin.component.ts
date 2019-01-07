import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  signin(form:NgForm){
    console.log(form.value)
    this.auth.signInRegular(form.value.email,form.value.password)
  }
  signup(){
    this.router.navigate(['/signup'])
  }

}
