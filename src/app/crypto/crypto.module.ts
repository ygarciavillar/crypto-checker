import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';

import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { HeaderComponent } from './coin-list/header/header.component';
import { CoinChartComponent } from './coin-detail/coin-chart/coin-chart.component';
import { CryptoDetailResolver } from '../core/services/crypto-detail.resolver';
import { BusyComponent } from '../shared/busy/busy.component';


const routes: Routes = [
  {path: '', component: CoinListComponent},
  {path: 'coins/:id', component: CoinDetailComponent, resolve: {coin: CryptoDetailResolver}}
];

@NgModule({
  declarations: [
    BannerComponent,
   // BusyComponent,
    CoinListComponent,
    CoinDetailComponent,
    HeaderComponent,
    CoinChartComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CryptoModule { }
