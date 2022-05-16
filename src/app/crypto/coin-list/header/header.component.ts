import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <section class="banner">
    <header>
        <h1>Crypto Checker</h1>
        <span class="decorator"></span>
        <p class="accent-color">Get all the info regarding your favorite crypto currency</p>
    </header>
    <div class="carousel">
        <app-banner></app-banner>
    </div>
  </section>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
