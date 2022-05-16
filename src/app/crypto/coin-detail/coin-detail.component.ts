import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinDetail } from '../../core/interfaces/coin-detail';
import { CryptoService } from '../../core/services/crypto.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoinDetailComponent implements OnInit {

  selectedCurrency$= this.cryptoService.selectedCurrency$;
  coin!: CoinDetail;

  constructor(private activatedRoute: ActivatedRoute, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    console.log("the resolved value is", this.activatedRoute.snapshot.data['resolvedCoinDetail'])
    this.coin = this.activatedRoute.snapshot.data['coin'];
    console.log(this.coin)
    
  }

  setCurrency(coinValue: any, currency: string): number{
    return coinValue[currency];
  } 
}
