import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDemoComponent } from './class-demo.component';

describe('ClassDemoComponent', () => {
  let component: ClassDemoComponent;
  let fixture: ComponentFixture<ClassDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
