import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, } from 'rxjs';
import { CoinDetail } from '../interfaces/coin-detail';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoDetailResolver implements Resolve<CoinDetail> {

  constructor(private cryptoService: CryptoService){}

  resolve(route: ActivatedRouteSnapshot, _ : RouterStateSnapshot): Observable<CoinDetail> {
    return this.cryptoService.getDetailCoin(route.paramMap.get('id')!);
  }
}
