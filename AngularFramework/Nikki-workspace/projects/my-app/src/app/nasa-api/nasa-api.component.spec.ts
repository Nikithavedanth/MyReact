import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaAPIComponent } from './nasa-api.component';

describe('NasaAPIComponent', () => {
  let component: NasaAPIComponent;
  let fixture: ComponentFixture<NasaAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NasaAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NasaAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
