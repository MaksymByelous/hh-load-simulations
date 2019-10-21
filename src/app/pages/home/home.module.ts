import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReportService } from '@app/core/data-services/report.service';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [ReportService]
})
export class HomeModule {}
