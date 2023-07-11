import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisereComponent } from './lisere.component';

describe('LisereComponent', () => {
  let component: LisereComponent;
  let fixture: ComponentFixture<LisereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LisereComponent]
    });
    fixture = TestBed.createComponent(LisereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
