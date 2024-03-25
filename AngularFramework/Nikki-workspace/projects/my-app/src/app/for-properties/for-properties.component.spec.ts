import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPropertiesComponent } from './for-properties.component';

describe('ForPropertiesComponent', () => {
  let component: ForPropertiesComponent;
  let fixture: ComponentFixture<ForPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPropertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
