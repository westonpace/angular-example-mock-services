import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockService } from './stock.service';

@Injectable()
export class RealStockService implements StockService {

  constructor(private httpClient: HttpClient) {

  }

  getAppleStockPrice() {
    return this.httpClient.get('https://api.iextrading.com/1.0/stock/aapl/price') as Observable<number>;
  }

}
