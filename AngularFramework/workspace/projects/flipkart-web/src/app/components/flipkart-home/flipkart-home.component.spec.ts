import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartHomeComponent } from './flipkart-home.component';

describe('FlipkartHomeComponent', () => {
  let component: FlipkartHomeComponent;
  let fixture: ComponentFixture<FlipkartHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
