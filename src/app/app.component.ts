import { Component } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular app XX';
  name = 'gal';
  lat = 51.678418;
  lng = 7.809007;
  zoom = 5;
  isValid = true;
  markers: marker[] = [
{
  lat: 51.673858,
  lng: 7.815982,
  label: 'A',
  draggable: true
},
{
  lat: 51.373858,
  lng: 7.215982,
  label: 'B',
  draggable: false
},
{
  lat: 51.723858,
  lng: 7.895982,
  label: 'C',
  draggable: true
}
];

  options: FormGroup;

  constructor(fb: FormBuilder) {

    this.options = fb.group({
      'point': 'israel',
      'sign': '$',
      'rate': [10, Validators.min(1)]
    });
  }

  increment() {
    this.options.value.rate = this.options.value.rate + 1;
  }
  decrement() {
    this.options.value.rate = this.options.value.rate - 1;
  }
  add() {
    alert('Hello ' + this.name);
  }
  addit(str: string) {
    alert('Hello ' + str);
  }

  IN() {
    this.zoom = this.zoom + 1;
  }
  OUT() {
    this.zoom = this.zoom - 1;
  }
  CIRCLE() {
    this.isValid = !this.isValid;
  }

  pointto(str: string) {
    switch (str) {
      case 'israel':
      this.zoom = 5;
      this.lat = 32.065975;
      this.lng = 34.784337;
        break;
      case 'USA':
      this.zoom = 5;
      this.lat = 40.725155;
      this.lng = -73.997751;
        break;
      case 'Italy':
      this.zoom = 5;
      this.lat = 41.902795;
      this.lng = 12.613265;
        break;
      default:
        break;
    }
  }
}

// tslint:disable-next-line:label-position

// tslint:disable-next-line:class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

