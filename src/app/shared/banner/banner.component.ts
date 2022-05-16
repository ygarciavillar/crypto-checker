import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../../core/interfaces/coin';
import { CryptoService } from '../../core/services/crypto.service';

@Component({
  selector: 'app-banner',
  template: `
    <marquee *ngIf="trendingCoins$ | async as coins" behavior="scroll" onmouseover="stop()" onmouseenter="start()" loop="infinite" direction="left">
           <div class="wrapper">
              <ng-container *ngFor="let coin of coins">
                  <div class="coin">
                      <div class="card">
                            <img [src]= "coin.image" [alt]="coin.name" />
                            <div class="content">
                              <h5>{{coin.symbol | uppercase}} <span class="alert">{{coin.market_cap_change_percentage_24h}} %</span></h5>
                              <p *ngIf="selectedCurrency$ | async as currency">{{ coin.current_price | currency: (currency |  uppercase) }}</p>
                            </div>
                        </div>
                    </div>
              </ng-container>
           </div>
        </marquee>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent  {

  trendingCoins$: Observable<Coin[]> = this.cryptoService.trendingCoins$;
  selectedCurrency$: Observable<string> =  this.cryptoService.selectedCurrency$;

  constructor(private cryptoService: CryptoService) { }

}
