import { Component } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StatisticsComponent } from './shared/modal/courses/statistics-modal/statistics.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XTrain';

  // constructor(private ngModal: NgbModal) {}

  openStatisticsCourse() {
    // const statisticsModalRef = this.ngModal.open(StatisticsComponent, { size: 'lg' });
  }

}
