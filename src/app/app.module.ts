import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { VehicleService } from './core/vehicle/vehicle.service'

import { DashboardModule } from './modules/dashboard/dashboard.module'
import { AuthModule } from './modules/auth/auth.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthGuard } from './core/auth.guard'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [VehicleService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
