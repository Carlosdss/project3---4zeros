import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';
import { ConfirmationService } from '../../../services/confirmation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  beverage = {
    size: '',
    alcohol: '',
    brand: '',
    soft: '',
    club: '',
    number: null,
    user: null,
  }

  units: number = 1;
  text = "&nbsp";
  club: string;
  user: string;

  constructor(
    private router: Router,
    private selection: SelectionService,
    private session: SessionService,
    private confirmation: ConfirmationService,
  ) { }

  ngOnInit() {

    this.beverage.size = this.selection.type,
    this.beverage.alcohol = this.selection.alcohol,
    this.beverage.brand = this.selection.brand,
    this.beverage.soft = this.selection.soft,
    this.beverage.club = this.selection.club,
    this.beverage.number = this.units,
    this.beverage.user = this.session.user;
    this.club = this.selection.club;
    this.user = this.session.user.name;
  }

 confirmBeverage() {
    console.log(this.beverage);
    this.confirmation.orderDrinks.push(this.beverage);
    console.log(this.confirmation.orderDrinks);
    this.confirmation.saveBeverage(this.beverage)
    .subscribe(
      (beverage) => {
        console.log(beverage)
        this.router.navigate(['/add-or-check-out'])
      } ,
      (err) => console.log(err)
    );
  }

  increment() {
  this.units++;
  this.beverage.number = this.units;
  }

  decrement() {
  if(this.units>1){
    this.units--;
    this.beverage.number = this.units;
  };

  }

back(){
  if(this.selection.type !=="Shot"){
 this.router.navigate(['/softs']);
 } else {
   this.router.navigate(['/brands']);
 }
 }


}
