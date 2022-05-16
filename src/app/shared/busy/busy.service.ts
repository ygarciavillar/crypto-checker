import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  private isBusySubject = new BehaviorSubject<boolean>(false);
  isBusy$ = this.isBusySubject.asObservable();

  count = 0 ;

  increment() {
    this.count ++ ;
    this.isBusy()
  }

  decrement() {
    this.count -- ;
    this.isBusy()
  }

  isBusy() {
    this.count > 0 ? this.isBusySubject.next(true) : this.isBusySubject.next(false);
  }
}
