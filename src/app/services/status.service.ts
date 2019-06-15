import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { LoginStatus } from '../constants/common.constants';
export class StatusService  {
    status: LoginStatus;
    private messageSource = new BehaviorSubject<any>('');
    currentMessage = this.messageSource.asObservable();

    constructor() {}

    setStatus(status: LoginStatus) {
        this.messageSource.next(status);
    }

    getStatus() {
       return this.currentMessage;
    }
}
