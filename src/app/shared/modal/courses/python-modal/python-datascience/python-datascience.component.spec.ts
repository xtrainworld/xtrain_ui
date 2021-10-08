import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonDatascienceComponent } from './python-datascience.component';

describe('PythonDatascienceComponent', () => {
  let component: PythonDatascienceComponent;
  let fixture: ComponentFixture<PythonDatascienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonDatascienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonDatascienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
