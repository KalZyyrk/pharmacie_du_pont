import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.type';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-button',
  templateUrl: './product-button.component.html',
  styleUrls: ['./product-button.component.css'],
})
export class ProductButtonComponent {
  constructor(private productsApi: ProductsService) {}

  @Input() button: any;
  @Input() btnIndex: number = 0;

  @Output() changeDiplayedProducts = new EventEmitter<string>();

  setDisplay(display: string): void {
    this.changeDiplayedProducts.emit(display);
  }
}
