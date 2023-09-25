import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { VehicleNamePipe } from './pipes/vehicle-name.pipe'

@NgModule({
  declarations: [VehicleNamePipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, VehicleNamePipe]
})
export class SharedModule {}
