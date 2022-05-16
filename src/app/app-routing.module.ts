import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CoinDetailComponent } from './crypto/coin-detail/coin-detail.component';
//import { CoinListComponent } from './coin-list/coin-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'coins', pathMatch:'full'},
  {path: 'coins', 
   loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule)
  },
//  {path: 'coin/:id', component: CoinDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
