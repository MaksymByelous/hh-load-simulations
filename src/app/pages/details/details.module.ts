import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { AvailabilityTableComponent } from '@app/pages/details/components/availability-table/availability-table.component';
import { AppliancesTableComponent } from '@app/pages/details/components/appliances-table/appliances-table.component';
import { LoadResultCurveComponent } from '@app/pages/details/components/load-result-curve/load-result-curve.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports: [CommonModule, TranslateModule, DetailsRoutingModule, GoogleChartsModule],
  declarations: [DetailsComponent, AvailabilityTableComponent, AppliancesTableComponent, LoadResultCurveComponent],
  providers: [DatePipe]
})
export class DetailsModule {}
