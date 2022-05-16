import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSubject = new BehaviorSubject<string> ("");
  error$ = this.errorSubject.asObservable()
  
  setErrorMessage(message: string) {
    this.errorSubject.next(message);
  }
}
