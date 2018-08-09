import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { StockService, STOCK_SERVICE } from './stock.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appleStockPrice = -1;
  lastUpdateTime = 'Not yet updated';

  constructor(@Inject(STOCK_SERVICE) private stockService: StockService, private ngZone: NgZone) {

  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      interval(1000).pipe(startWith(0), switchMap(_ => this.stockService.getAppleStockPrice())).subscribe(stockPrice => {
        this.ngZone.run(() => {
          this.appleStockPrice = stockPrice;
          this.lastUpdateTime = new Date().toISOString();
        });
      });
    });
  }

}
