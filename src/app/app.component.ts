import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-busy></app-busy>
  <app-toolbar></app-toolbar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
