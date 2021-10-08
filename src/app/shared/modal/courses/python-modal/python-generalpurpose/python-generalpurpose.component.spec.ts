import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonGeneralpurposeComponent } from './python-generalpurpose.component';

describe('PythonGeneralpurposeComponent', () => {
  let component: PythonGeneralpurposeComponent;
  let fixture: ComponentFixture<PythonGeneralpurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonGeneralpurposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonGeneralpurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
