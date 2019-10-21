import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from '@app/core';
import { ISimulation, ReportService } from '@app/core/data-services/report.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public simulationData: ISimulation;

  constructor(private _route: ActivatedRoute, private _reportService: ReportService) {}

  ngOnInit() {
    this._route.params
      .pipe(
        pluck('id'),
        untilDestroyed(this)
      )
      .subscribe((id: string) => {
        this.simulationData = this._reportService.getSimulationById(id);
      });
  }

  ngOnDestroy() {}
}
