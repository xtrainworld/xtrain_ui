import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalLangProcecsngComponent } from './natural-lang-procecsng.component';

describe('NaturalLangProcecsngComponent', () => {
  let component: NaturalLangProcecsngComponent;
  let fixture: ComponentFixture<NaturalLangProcecsngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalLangProcecsngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalLangProcecsngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
