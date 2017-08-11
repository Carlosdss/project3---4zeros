import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  softs: Array<string>
  club: string;
  user: string;
  text = "&nbsp";

  constructor(
    private router: Router,
    private softComponent: SelectionService,
    private session: SessionService
  ) {
  }

  ngOnInit() {
    this.softs = this.softComponent.getSofts();
    this.club = this.softComponent.club;
    this.user = this.session.user.name;
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
