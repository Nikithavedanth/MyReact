import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartNotfoundComponent } from './flipkart-notfound.component';

describe('FlipkartNotfoundComponent', () => {
  let component: FlipkartNotfoundComponent;
  let fixture: ComponentFixture<FlipkartNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
