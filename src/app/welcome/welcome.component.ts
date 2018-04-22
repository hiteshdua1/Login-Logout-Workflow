import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { LoginStatus } from '../constants/common.constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.setStatus(LoginStatus.LOGGED_OUT);
  }

}
