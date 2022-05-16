import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {Observable, Subject, takeUntil } from 'rxjs';
import { ErrorService } from 'src/app/core/services/error.service';
import { Coin } from '../../core/interfaces/coin';
import { CryptoService } from '../../core/services/crypto.service';




@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CoinListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource!: MatTableDataSource<Coin>;
  selectedCurrency$: Observable<string> =  this.cryptoService.selectedCurrency$;
  error$: Observable<string> = this.errorService.error$
  stop$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private router: Router, private cryptoService: CryptoService, private errorService: ErrorService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cryptoService.listCoins$.pipe(
      takeUntil(this.stop$)
    ).subscribe( coins => {
      this.dataSource = new MatTableDataSource(coins);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
        
    )
  }
  
  onClick(coinId : string): void {
    this.router.navigate([`coins/${coinId}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
      }
  }

  showSnack(message: string){
    console.log("the error was:", message)
     this._snackBar.open(message, 'close', {
       duration: 5000
     })
  }
  ngOnDestroy(){
    this.stop$.next();
    this.stop$.complete();
  }
  
}




