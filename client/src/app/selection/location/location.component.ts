import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Array<any>;
    text = "&nbsp";

  constructor(
    private router: Router,
    private locationComponent: SelectionService
  ) { }

  ngOnInit() {
    this.locations = this.locationComponent.getLocation()
  }

  saveLocationComponent(location) {
    this.locationComponent.saveLocation(location);
    this.router.navigate(['/clubs']);
  }

  back(){
   this.router.navigate(['/']);
   }

}
