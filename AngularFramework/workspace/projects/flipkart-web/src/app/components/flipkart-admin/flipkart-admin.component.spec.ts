import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartAdminComponent } from './flipkart-admin.component';

describe('FlipkartAdminComponent', () => {
  let component: FlipkartAdminComponent;
  let fixture: ComponentFixture<FlipkartAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipkartAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlipkartAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
