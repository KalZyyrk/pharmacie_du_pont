import { Component } from '@angular/core';
import { Product } from 'src/app/product.type';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-home-product-gallery',
  templateUrl: './home-product-gallery.component.html',
  styleUrls: ['./home-product-gallery.component.css'],
})
export class HomeProductGalleryComponent {
  buttons = [
    {
      label: 'Nouveau',
      diplay: 'new',
    },
    {
      label: 'A La Une',
      display: 'hot',
    },
  ];
  productsDisplay: Product[] = [];

  constructor(private productsApi: ProductsService) {
    this.productsDisplay = productsApi.getNewProduct();
  }

  changeProductDisplayed(display: string): void {
    this.productsDisplay =
      display === 'new'
        ? this.productsApi.getNewProduct(8)
        : this.productsApi.getHotProducts(8);
    console.log(this.productsDisplay);
  }
}
