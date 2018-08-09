import { NgModule } from '@angular/core';
import { STOCK_SERVICE } from './stock.service';
import { MockStockService } from './stock.mock.service';

@NgModule({
  providers: [
    { provide: STOCK_SERVICE, useClass: MockStockService }
  ]
})
export class MockModule {

}
