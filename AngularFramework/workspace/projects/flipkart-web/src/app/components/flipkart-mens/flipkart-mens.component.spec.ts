import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartMensComponent } from './flipkart-mens.component';

describe('FlipkartMensComponent', () => {
  let component: FlipkartMensComponent;
  let fixture: ComponentFixture<FlipkartMensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartMensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
