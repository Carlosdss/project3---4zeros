import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';
import { ConfirmationService } from '../../../services/confirmation.service';

@Component({
  selector: 'app-add-or-check-out',
  templateUrl: './add-or-check-out.component.html',
  styleUrls: ['./add-or-check-out.component.css']
})

export class AddOrCheckOutComponent implements OnInit {

  orders: Array<any>;

  constructor(
    private router: Router,
    private selection: SelectionService,
    private session: SessionService,
    private confirmation: ConfirmationService,
  ) { }

  ngOnInit() {
    this.orders = this.confirmation.orderDrinks;
  }

  addAnother(){
    this.router.navigate(['/types']);
    this.selection.type = '';
    this.selection.alcohol = '';
    this.selection.brand = ''
    this.selection.soft = '';
  }

  checkout(){
    this.router.navigate(['/checkout']);
  }

}
