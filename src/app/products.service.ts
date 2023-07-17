import { Injectable } from '@angular/core';
import { Product } from './product.type';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(limit?: number): Product[] {
    if (limit) {
      let limitedArray: Product[] = this.setMaxProduct(limit, PRODUCTS);
      return limitedArray;
    }
    return PRODUCTS;
  }
  getHotProducts(limit?: number): Product[] {
    const hotProducts: Product[] = PRODUCTS.filter((product) => product.hot);
    if (limit) {
      let limitedArray: Product[];
      limitedArray = this.setMaxProduct(limit, hotProducts);
      return limitedArray;
    }
    return hotProducts;
  }
  getNewProduct(limit?: number): Product[] {
    const newProducts: Product[] = PRODUCTS.filter((product) => product.new);
    if (limit) {
      let limitedArray: Product[];
      limitedArray = this.setMaxProduct(limit, newProducts);
      return limitedArray;
    }
    return newProducts;
  }

  getFilterProducts(category: string, limit?: number) {
    const filteredProducts: Product[] = PRODUCTS.filter(
      (product) => product.category === category
    );
    if (limit) {
      let limitedArray: Product[];
      limitedArray = this.setMaxProduct(limit, filteredProducts);
      return limitedArray;
    }
    return filteredProducts;
  }

  orderedByPrice(order: string, ArrayOfProduct: Product[]): Product[] {
    if (order === 'desc') {
      return ArrayOfProduct.sort((a, b) => a.price - b.price);
    } else {
      return ArrayOfProduct.sort((a, b) => b.price - a.price);
    }
  }

  setMaxProduct(limit: number, ArrayOfProduct: Product[]): Product[] {
    let LimitedArray: Product[] = [];
    for (let i = 0; i < limit; i++) {
      LimitedArray.push(ArrayOfProduct[i]);
    }
    return LimitedArray;
  }
}
