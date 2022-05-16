import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table'
import {MatToolbarModule} from '@angular/material/toolbar';

const matModules = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  
]

@NgModule({
  imports:matModules,
  exports:matModules
})
export class MaterialModule { }
