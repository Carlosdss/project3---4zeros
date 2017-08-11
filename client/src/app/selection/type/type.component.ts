import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types: Array<string>
  club: string;
  user: string;
    text = "&nbsp";

  constructor(
    private router: Router,
    private typeComponent: SelectionService,
    private session: SessionService
  ) {
  }

  ngOnInit() {
    this.types = this.typeComponent.getTypes();
    this.club = this.typeComponent.club;
    this.user = this.session.user.name;
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
