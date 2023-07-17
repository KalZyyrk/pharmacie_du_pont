import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductButtonComponent } from './product-button.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ProductButtonComponent', () => {
  let component: ProductButtonComponent;
  let fixture: ComponentFixture<ProductButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ProductButtonComponent],
      providers: [TranslateService],
    });
    fixture = TestBed.createComponent(ProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const button = { label: 'nouveau', display: 'new' };
    component.button = button;
    expect(component).toBeTruthy();
  });
});
