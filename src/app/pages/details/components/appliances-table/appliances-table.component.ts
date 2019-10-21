import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAppliance } from '@app/core/data-services/report.service';

@Component({
  selector: 'app-appliances-table',
  templateUrl: './appliances-table.component.html',
  styleUrls: ['./appliances-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppliancesTableComponent {
  @Input() public appliances: IAppliance[];
}
