import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Array<string>;
  club: string;
  user: string;
  text = "&nbsp";

  constructor(
    private router: Router,
    private brandComponent: SelectionService,
    private session: SessionService
  ) {
  }

  ngOnInit() {
    this.brands = this.brandComponent.getBrands();
    this.club = this.brandComponent.club;
    this.user = this.session.user.name;
  }

  saveBrandComponent(brand) {
    this.brandComponent.saveBrand(brand);
    if (this.brandComponent.type == "Shot"){
     this.router.navigate(['/confirmation']);
   } else {
    this.router.navigate(['/softs']);
  }
}

back(){
 this.router.navigate(['/alcohols']);
 }

}
