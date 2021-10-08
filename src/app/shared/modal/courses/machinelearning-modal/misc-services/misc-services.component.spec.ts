import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscServicesComponent } from './misc-services.component';

describe('MiscServicesComponent', () => {
  let component: MiscServicesComponent;
  let fixture: ComponentFixture<MiscServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
