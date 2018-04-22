import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../modal/user-details.modal';
import { DataService } from './../Services/data.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // userDetails: UserDetails;

  constructor() { }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.userDetails = message);
  }


}
