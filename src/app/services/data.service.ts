import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetails } from '../modal/user-details.modal';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  getUserDetails(userDetails: UserDetails) {
    this.messageSource.next(userDetails);
  }

}
