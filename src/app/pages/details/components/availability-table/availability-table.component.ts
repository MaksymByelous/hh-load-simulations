import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAvailability } from '@app/core/data-services/report.service';

@Component({
  selector: 'app-availability-table',
  templateUrl: './availability-table.component.html',
  styleUrls: ['./availability-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityTableComponent {
  @Input() public availability: IAvailability;
}
