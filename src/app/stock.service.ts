import { Observable } from 'rxjs';

export const STOCK_SERVICE = 'STOCK_SERVICE';
export interface StockService {
  getAppleStockPrice(): Observable<number>;
}
