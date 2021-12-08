import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleDetailsService {
  subject = new BehaviorSubject('');
  // $subject = this.subject.asObservable();
  constructor() {}

  receiveData(){
    return this.subject.asObservable();
  }

  sendData(data: any){
    this.subject.next(data)
  }
}
