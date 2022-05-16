import { Component, OnInit } from '@angular/core';
import { BusyService } from './busy.service';

@Component({
  selector: 'app-busy',
  template: `
    <div class="spinner-container" *ngIf="isBusy$ | async as busy">
      <mat-progress-bar class="progress"
      color="accent" mode="indeterminate" *ngIf="busy"></mat-progress-bar>
    </div>
  `,
  styles: [
    `.spinner-container{
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 10;
      background: rgba(0,0,0, .5);
      .progress{
        position: relative;
        width: 50%;
        top: 50%;
        transform: translate(50%, -50%);
      }
   }`
  ]
})
export class BusyComponent {

  isBusy$ = this.busyService.isBusy$

  constructor(private busyService: BusyService) { }

  

}
