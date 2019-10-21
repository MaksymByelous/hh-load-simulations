import { Component, OnInit } from '@angular/core';
import { ISimulation, ReportService } from '@app/core/data-services/report.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: ISimulation[];

  constructor(private _reportService: ReportService) {}

  ngOnInit() {
    this.data = this._reportService.getReport();
  }
}
