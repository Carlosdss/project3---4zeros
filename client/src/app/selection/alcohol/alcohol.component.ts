import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {

  alcohols: Array<any>

  constructor(
    private router: Router,
    private alcoholComponent: SelectionService
  ) {
  }

  ngOnInit() {
    this.alcohols = this.alcoholComponent.getAlcohol()
  }

  saveAlcoholComponent(alcohol){
    this.alcoholComponent.saveAlcohol(alcohol);
    this.router.navigate(['/brands']);
  }

  back(){
   this.router.navigate(['/types']);
   }

}
