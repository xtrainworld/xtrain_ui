import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEvaluationMetricsComponent } from './model-evaluation-metrics.component';

describe('ModelEvaluationMetricsComponent', () => {
  let component: ModelEvaluationMetricsComponent;
  let fixture: ComponentFixture<ModelEvaluationMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelEvaluationMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEvaluationMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
