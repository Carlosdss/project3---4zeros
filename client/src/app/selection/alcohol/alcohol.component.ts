import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent implements OnInit {

  alcohols: Array<any>;
  user: string;
  club: string;
  text = "&nbsp";

  constructor(
    private router: Router,
    private alcoholComponent: SelectionService,
    private session: SessionService
  ) {
  }

  ngOnInit() {
    this.alcohols = this.alcoholComponent.getAlcohol();
    this.club = this.alcoholComponent.club;
    this.user = this.session.user.name;
  }

  saveAlcoholComponent(alcohol){
    this.alcoholComponent.saveAlcohol(alcohol);
    this.router.navigate(['/brands']);
  }

  back(){
   this.router.navigate(['/types']);
   }

}
