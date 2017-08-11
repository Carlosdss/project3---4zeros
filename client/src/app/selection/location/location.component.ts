import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: Array<any>;
  user: string;
    text = "&nbsp";

  constructor(
    private router: Router,
    private locationComponent: SelectionService,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.locations = this.locationComponent.getLocation();
    this.user = this.session.user.name;
  }

  saveLocationComponent(location) {
    this.locationComponent.saveLocation(location);
    this.router.navigate(['/clubs']);
  }

  back(){
   this.router.navigate(['/']);
   }

}
