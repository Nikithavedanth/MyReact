import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartJewelryComponent } from './flipkart-jewelry.component';

describe('FlipkartJewelryComponent', () => {
  let component: FlipkartJewelryComponent;
  let fixture: ComponentFixture<FlipkartJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartJewelryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartJewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
