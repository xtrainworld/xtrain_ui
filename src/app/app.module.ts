import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PythonGeneralpurposeComponent } from './shared/modal/courses/python-modal/python-generalpurpose/python-generalpurpose.component';
import { StatisticsComponent } from './shared/modal/courses/statistics-modal/statistics.component';
import { ModelEvaluationMetricsComponent } from './shared/modal/courses/machinelearning-modal/model-evaluation-metrics/model-evaluation-metrics.component';
import { DataPreprocsngClngStragComponent } from './shared/modal/courses/machinelearning-modal/data-preprocsng-clng-strag/data-preprocsng-clng-strag.component';
import { DeepLearningComponent } from './shared/modal/courses/machinelearning-modal/deep-learning/deep-learning.component';
import { MachinelearningComponent } from './shared/modal/courses/machinelearning-modal/machinelearning/machinelearning.component';
import { MiscServicesComponent } from './shared/modal/courses/machinelearning-modal/misc-services/misc-services.component';
import { PythonDatascienceComponent } from './shared/modal/courses/python-modal/python-datascience/python-datascience.component';
import { NaturalLangProcecsngComponent } from './shared/modal/courses/machinelearning-modal/natural-lang-procecsng/natural-lang-procecsng.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    PythonGeneralpurposeComponent,
    PythonDatascienceComponent,
    ModelEvaluationMetricsComponent,
    MiscServicesComponent,
    MachinelearningComponent,
    DeepLearningComponent,
    DataPreprocsngClngStragComponent,
    MiscServicesComponent,
    NaturalLangProcecsngComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
