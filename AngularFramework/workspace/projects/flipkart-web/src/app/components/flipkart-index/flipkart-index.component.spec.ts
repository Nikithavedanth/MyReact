import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartIndexComponent } from './flipkart-index.component';

describe('FlipkartIndexComponent', () => {
  let component: FlipkartIndexComponent;
  let fixture: ComponentFixture<FlipkartIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
