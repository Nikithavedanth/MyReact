import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartWomensComponent } from './flipkart-womens.component';

describe('FlipkartWomensComponent', () => {
  let component: FlipkartWomensComponent;
  let fixture: ComponentFixture<FlipkartWomensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartWomensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
