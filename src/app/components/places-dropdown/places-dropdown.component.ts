import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-places-dropdown',
  templateUrl: './places-dropdown.component.html',
  styleUrls: ['./places-dropdown.component.scss']
})
export class PlacesDropdownComponent {
  
  @Input() name: string;
  @Input() places: any;
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter();

  onSelectChange(value) {
    this.selectedChange.emit(value);
  }
}