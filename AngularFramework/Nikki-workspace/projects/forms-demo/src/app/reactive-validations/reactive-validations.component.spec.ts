import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidationsComponent } from './reactive-validations.component';

describe('ReactiveValidationsComponent', () => {
  let component: ReactiveValidationsComponent;
  let fixture: ComponentFixture<ReactiveValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveValidationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
