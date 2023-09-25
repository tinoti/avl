import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.scss']
})
export class VehicleSearchComponent {
  @Input() searchTerm!: string
  @Output() searchTermChange = new EventEmitter<string>()

  onSearchChange(): void {
    this.searchTermChange.emit(this.searchTerm)
  }
}
