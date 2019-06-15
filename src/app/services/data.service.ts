import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetails } from '../modal/user-details.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getUserDetails(userDetails: UserDetails) {
    this.messageSource.next(userDetails);
  }

  getSkills(): Promise<any> {
    return this.http.get('http://localhost:3000/skills').toPromise();
  }

}
