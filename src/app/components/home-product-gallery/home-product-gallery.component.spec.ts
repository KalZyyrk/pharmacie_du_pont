import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductGalleryComponent } from './home-product-gallery.component';

describe('HomeProductGalleryComponent', () => {
  let component: HomeProductGalleryComponent;
  let fixture: ComponentFixture<HomeProductGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProductGalleryComponent]
    });
    fixture = TestBed.createComponent(HomeProductGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
