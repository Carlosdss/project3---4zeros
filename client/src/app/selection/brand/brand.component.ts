import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Array<string>

  constructor(
    private router: Router,
    private brandComponent: SelectionService
  ) {
  }

  ngOnInit() {
    this.brands = this.brandComponent.getBrands()
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
