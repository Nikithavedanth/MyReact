import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartMoreDetailsComponent } from './flipkart-more-details.component';

describe('FlipkartMoreDetailsComponent', () => {
  let component: FlipkartMoreDetailsComponent;
  let fixture: ComponentFixture<FlipkartMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartMoreDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
