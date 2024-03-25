import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchProductComponent } from './switch-product.component';

describe('SwitchProductComponent', () => {
  let component: SwitchProductComponent;
  let fixture: ComponentFixture<SwitchProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
