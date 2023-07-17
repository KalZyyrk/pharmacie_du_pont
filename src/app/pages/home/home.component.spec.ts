import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomeProductGalleryComponent } from 'src/app/components/home-product-gallery/home-product-gallery.component';
import { ProductButtonComponent } from 'src/app/components/product-button/product-button.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), RouterTestingModule],
      declarations: [
        HomeComponent,
        HeroComponent,
        HomeProductGalleryComponent,
        ProductButtonComponent,
        ProductCardComponent,
      ],
      providers: [TranslateService],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
