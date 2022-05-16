import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { CryptoService } from '../../core/services/crypto.service';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar class="xxx">
    <h1>{{"crypto checker" | uppercase}}</h1>
    <span class="toolbar-spacer"></span>
    
    <div class="toggle">
      <mat-slide-toggle aria-label="switchToDarkMode"
        [(ngModel)]="isChecked"
        (change)="toggleMode($event)">
      </mat-slide-toggle>
      <mat-icon>{{ mode }}</mat-icon>
    </div>
      
    <mat-form-field class="currency-selector" color="primary">
      <mat-select [value]="currencySelected" (selectionChange)="onSelection($event)">
        <mat-option *ngFor="let currency of currencies" [value]="currency">
          {{ currency | uppercase}}
        </mat-option>
      </mat-select>
    </mat-form-field>

</mat-toolbar>
  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  title = 'crypto-checker';
  mode: string = 'light_mode';
  isChecked: boolean = false;

  currencies: string[] = ['usd', 'eur'];
  currencySelected: string = 'usd';

  constructor(private cryptoService: CryptoService) { }

  toggleMode(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'nights_stay' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }

  onSelection(event: MatSelectChange): any{
    this.cryptoService.setSelectedCurrency(event.value);
  }
}
