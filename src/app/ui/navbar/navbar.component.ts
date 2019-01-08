import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService,private router : Router) { }

  ngOnInit() {
  }
  openAccount(){
    this.router.navigate(['/account'])
  }

  openProfiles(){
    this.router.navigate(['/profiles'])
  }
  openProjects(){
    this.router.navigate(['/projects'])
  }


}
