import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coin } from '../interfaces/coin';
import { CoinChart } from '../interfaces/coin-chart';
import { CoinDetail } from '../interfaces/coin-detail';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private _apiURL = environment.api;
  private selectedCurrencySubject: BehaviorSubject<string> = new BehaviorSubject<string>('usd');
  private coinDetail$!: Observable<CoinDetail>
  
  selectedCurrency$ = this.selectedCurrencySubject.asObservable();

  trendingCoins$ = this.selectedCurrency$.pipe(
    switchMap(selectedCurrency => 
      this.http.get<Coin[]>(`${this._apiURL}/markets?vs_currency=${selectedCurrency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
    ),
    map((coins: Coin[]) => this.transformData(coins))
  )

  listCoins$: Observable<Coin[]> = this.selectedCurrency$.pipe(
    switchMap(selectedCurrency => 
      this.http.get<Coin[]>(`${this._apiURL}/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    ),
    map((coins: Coin[]) => this.transformData(coins))
  )

getDetailCoin(coinId : string) : Observable<CoinDetail> {
     this.coinDetail$ = this.http.get<any>(`${this._apiURL}/${coinId}`)
            .pipe(
              map( data=> ({
                  id: data.id,
                  symbol: data.symbol,
                  name: data.name,
                  image: data.image.large,
                  description: {en: data.description.en, es:data.description.es },
                  market_data: {current_price: {eur: data.market_data.current_price.eur, usd: data.market_data.current_price.usd} ,
                                market_cap: {eur: data.market_data.market_cap.eur, usd:  data.market_data.market_cap.usd},
                                market_cap_rank: data.market_data.market_cap_rank }
                  }) as CoinDetail 
                ) 
             )
    return this.coinDetail$
}

  getDataChart(coinId: string, days: number): Observable<CoinChart>{
    return this.selectedCurrency$.pipe(
      switchMap(selectedCurrency => 
        this.http.get<CoinChart>(`${this._apiURL}/${coinId}/market_chart?vs_currency=${selectedCurrency}&days=${days}`).pipe(
          tap( data => console.log(`Getting data chart ${data}`))
       )
      )
    )
  }

  constructor(private http: HttpClient) { }

  setSelectedCurrency(currency: string): void {
    this.selectedCurrencySubject.next(currency);
  }

  private transformData(coins: Coin[]) {
    return coins.map(data => ({
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image,
      current_price: data.current_price,
      market_cap: data.market_cap,
      market_cap_rank: data.market_cap_rank,
      price_change_24h: data.price_change_24h,
      price_change_percentage_24h: data.price_change_percentage_24h,
      market_cap_change_24h: data.market_cap_change_24h,
      market_cap_change_percentage_24h: data.market_cap_change_percentage_24h,
      price_change_percentage_24h_in_currency: data.price_change_percentage_24h_in_currency,
    }) as Coin )
  }
}
