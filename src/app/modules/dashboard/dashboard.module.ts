import { NgModule } from '@angular/core'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './containers/dashboard.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component'
import { VehicleTableComponent } from './components/vehicle-table/vehicle-table.component'
import { PrimeNGModule } from 'src/app/shared/modules/primeng.module'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    VehicleSearchComponent,
    VehicleTableComponent
  ],
  imports: [DashboardRoutingModule, PrimeNGModule, SharedModule]
})
export class DashboardModule {}
