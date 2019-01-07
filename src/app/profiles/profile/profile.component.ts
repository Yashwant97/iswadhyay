import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit() {
    // code to get id from url and fetch profile from firestore with doc id got from url
    // and subscribe user to it using function in profile service
  }

}
