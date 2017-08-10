import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

export interface Beverage{
  _id:string,
  size: string,
  alcohol: string,
  soft: string,
  number: number,
  club: string,
  updated_at:Date,
  created_at:Date
}

export interface Order{
  _id:string,
  beverages: Array<Beverage>,
  club: string,
  updated_at:Date,
  created_at:Date
}

@Injectable()
export class ConfirmationService {
    beverage: Beverage;
    order: Order;
    options: object = {withCredentials:true};
    BASE_URL: string=`${environment.BASE_URL}/api/beverage`; //environment.BASE_URL: "http://localhost:3000",

    orderDrinks = [];

    constructor(private http:Http) {
    }

    saveBeverage(beverage):Observable<Beverage> {
      return this.http.post(`${this.BASE_URL}/confirm`, beverage, this.options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    saveOrder(orderDrinks):Observable<Order> {
      return this.http.post(`${this.BASE_URL}/order`, orderDrinks, this.options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    handleError(e) {
      console.error("Error en la llamada a la API");
      return Observable.throw(e.json().message);
    }

  }
