import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  softs: Array<string>
  text = "&nbsp";

  constructor(
    private router: Router,
    private softComponent: SelectionService
  ) {
  }

  ngOnInit() {
    this.softs = this.softComponent.getSofts()
  }

  saveSoftComponent(soft) {
    this.softComponent.saveSoft(soft);
    console.log(soft);
    this.router.navigate(['/confirmation']);
  }

  back() {
    if (this.softComponent.type !== "Soft") {
      this.router.navigate(['/brands']);
    } else {
      this.router.navigate(['/types']);
    }
  }

}
