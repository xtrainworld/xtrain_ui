import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPreprocsngClngStragComponent } from './data-preprocsng-clng-strag.component';

describe('DataPreprocsngClngStragComponent', () => {
  let component: DataPreprocsngClngStragComponent;
  let fixture: ComponentFixture<DataPreprocsngClngStragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPreprocsngClngStragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPreprocsngClngStragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
