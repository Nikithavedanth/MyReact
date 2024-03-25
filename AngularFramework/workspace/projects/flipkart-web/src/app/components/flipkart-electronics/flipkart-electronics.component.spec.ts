import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartElectronicsComponent } from './flipkart-electronics.component';

describe('FlipkartElectronicsComponent', () => {
  let component: FlipkartElectronicsComponent;
  let fixture: ComponentFixture<FlipkartElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartElectronicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
