import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getProducts should return all the products', () => {
    expect(service.getProducts()).toHaveSize(17);
  });

  it('#getHotProducts should return all Hot Products', () => {
    expect(service.getHotProducts()).toHaveSize(7);
    expect(service.getHotProducts).toEqual(
      jasmine.arrayContaining([jasmine.objectContaining({ hot: true })])
    );
  });
});
