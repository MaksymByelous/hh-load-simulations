import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IResultLoadMeasurements } from '@app/core/data-services/report.service';
import * as moment from 'moment';

interface IChartConfig {
  type: string;
  data: any[];
  columnNames: string[];
  options: object;
}

@Component({
  selector: 'app-load-result-curve',
  templateUrl: './load-result-curve.component.html',
  styleUrls: ['./load-result-curve.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadResultCurveComponent implements OnInit {
  @Input()
  set chartData(data: IResultLoadMeasurements[]) {
    let totalCurveLoad = 0;
    let totalLightingLoad = 0;
    data.forEach((dataItem: IResultLoadMeasurements) => {
      const newDataItem = Object.values(dataItem);
      const timeLabel = moment()
        .startOf('day')
        .seconds(dataItem.time * 60)
        .format('H:mm');
      totalCurveLoad += dataItem.value;
      totalLightingLoad += dataItem.lightingValue;
      newDataItem.splice(0, 1, timeLabel);
      this.chartConfig.data.push(newDataItem);
    });
    this.curveLoadColumnName = `Curve Load, Total: ${totalCurveLoad}`;
    this.LightingLoadColumnName = `Lighting Load, Total: ${totalLightingLoad}`;
  }

  public curveLoadColumnName: string;
  public LightingLoadColumnName: string;
  public chartConfig: IChartConfig = {
    type: 'LineChart',
    columnNames: ['Time', 'Curve Load', 'Lighting Load', 'Active Occupancy', 'Occupancy'],
    data: [],
    options: {
      width: '100%',
      height: 500,
      legend: {
        position: 'top',
        alignment: 'center'
      },
      pointSize: 3,
      series: {
        3: { targetAxisIndex: 3 },
        4: { targetAxisIndex: 4 }
      },
      chartArea: {
        width: '90%',
        height: '70%'
      }
    }
  };

  ngOnInit(): void {
    this.chartConfig.columnNames = [
      'Time',
      this.curveLoadColumnName,
      this.LightingLoadColumnName,
      'Active Occupancy',
      'Occupancy'
    ];
  }
}
