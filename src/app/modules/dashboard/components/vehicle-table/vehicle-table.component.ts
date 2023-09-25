import { Component, Input } from '@angular/core'
import { VehicleModel } from 'src/app/core/vehicle/vehicle.model'

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.scss']
})
export class VehicleTableComponent {
  @Input() vehicles: VehicleModel[] | any = null
}
