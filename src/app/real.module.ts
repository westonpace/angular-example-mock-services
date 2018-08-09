import { NgModule } from '@angular/core';
import { STOCK_SERVICE } from './stock.service';
import { RealStockService } from './stock.real.service';

@NgModule({
  providers: [
    { provide: STOCK_SERVICE, useClass: RealStockService }
  ]
})
export class RealModule {

}
