import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTrackBYComponent } from './for-track-by.component';

describe('ForTrackBYComponent', () => {
  let component: ForTrackBYComponent;
  let fixture: ComponentFixture<ForTrackBYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForTrackBYComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForTrackBYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
