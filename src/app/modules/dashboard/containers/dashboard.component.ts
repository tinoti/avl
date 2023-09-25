import { Component } from '@angular/core'
import { VehicleModel } from '../../../core/vehicle/vehicle.model'
import { VehicleService } from '../../../core/vehicle/vehicle.service'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/core/auth.service'
import { Observable, map } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  vehicles$: Observable<VehicleModel[]> = this.vehicleService.getVehicles()
  filteredVehicles$: Observable<VehicleModel[]> = this.vehicles$
  searchTerm: string = ''

  constructor(
    private vehicleService: VehicleService,
    private cookieService: CookieService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Mock token service for example purposes
    this.authService.decodeToken('')
  }

  onSearch(): void {
    this.filteredVehicles$ = this.vehicles$.pipe(
      map((vehicles: VehicleModel[]) => {
        const lowerCaseTerm = this.searchTerm.toLowerCase()

        if (lowerCaseTerm === 'active') {
          return vehicles.filter(vehicle => vehicle.active)
        } else if (lowerCaseTerm === 'inactive') {
          return vehicles.filter(vehicle => !vehicle.active)
        } else if (this.searchTerm) {
          return vehicles.filter(
            vehicle =>
              vehicle.name.toLowerCase().includes(lowerCaseTerm) ||
              vehicle.manufacturer.toLowerCase().includes(lowerCaseTerm) ||
              vehicle.model.toLowerCase().includes(lowerCaseTerm) ||
              vehicle.licensePlate.toLowerCase().includes(lowerCaseTerm) ||
              vehicle.year.toString().includes(this.searchTerm) ||
              vehicle.type.toLowerCase().includes(lowerCaseTerm) ||
              vehicle.fuelType.toLowerCase().includes(lowerCaseTerm)
          )
        } else {
          return [...vehicles]
        }
      })
    )
  }

  onSignOut(): void {
    this.cookieService.delete('authToken')
    this.router.navigate(['/sign-in'])
  }
}
