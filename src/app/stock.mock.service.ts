import { of } from 'rxjs';
import { StockService } from './stock.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MockStockService implements StockService {

  private index = 0;
  private prices = [125, 150, 117.3];

  getAppleStockPrice() {
    const priceToReturn = this.prices[this.index++];
    if (this.index === this.prices.length) {
      this.index = 0;
    }
    return of(priceToReturn);
  }

}
