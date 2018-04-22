import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { LoginStatus } from '../constants/common.constants';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status = '';

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.getStatus().subscribe((value) => this.onStatusChange(value));
  }

  onStatusChange(value) {
    switch (value) {
      case LoginStatus.LOGGED_IN:
        this.status = 'Hi pal you are logged in !';
        break;
      case LoginStatus.LOGGED_OUT:
        this.status = 'Hi pal you are logged out !';
        break;
      case LoginStatus.LOGGINING_IN:
        this.status = 'Trying hard to Log you in ......... ! phew !!!! ';
        break;
      case LoginStatus.LOGGING_OUT:
        this.status = 'Logging you out ......... ! Adios !!';
        break;
    }
  }

}
