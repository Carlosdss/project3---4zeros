import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types: Array<string>

  constructor(
    private router: Router,
    private typeComponent: SelectionService
  ) {
  }

  ngOnInit() {
    this.types = this.typeComponent.getTypes();
  }

  saveTypeComponent(type){
    this.typeComponent.saveType(type);
    if (type == "Soft") {
      this.router.navigate(['/softs'])
    } else {
    this.router.navigate(['/alcohols']);
  }
}

back(){
 this.router.navigate(['/clubs']);
 }

}
