import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'vehicleName'
})
export class VehicleNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value
    }
    const parts = value.split(' ## ')
    return parts[0]
  }
}
