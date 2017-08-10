
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';

@Injectable()
export class SelectionService {

  type: string = "";
  location: string = "";
  club: string = "";
  alcohol: string = "";
  brand: string = "";
  soft: string = "";
  counter: number = 1;
  order: Array<any> = [];

  types: Array<any> = [
    {type: "Regular"},
    {type: "Shot"},
    {type: "Soft"}
  ]

  clubs: Array<any> = [
    {location: "Madrid", club: "Pachá"},
    {location: "Madrid", club: "Kapital"},
    {location: "Madrid", club: "Comodoro"},
    {location: "Madrid", club: "Graf"},
    {location: "Barcelona", club: "Razzmatazz"},
    {location: "Barcelona", club: "Opium"},
    {location: "Barcelona", club: "Soho"},
    {location: "Barcelona", club: "Hyde Club"},
    {location: "Ibiza", club: "Pachá Ibiza"},
    {location: "Ibiza", club: "Ushuaia"},
    {location: "Ibiza", club: "Amnesia"},
    {location: "Ibiza", club: "Space"}
  ]

  alcohols: Array<any> = [
    {alcohol: "Whisky", brand: "Johnie Walker"},
    {alcohol: "Whisky", brand: "Ballantine's"},
    {alcohol: "Whisky", brand: "J&B"},
    {alcohol: "Whisky", brand: "Chivas"},
    {alcohol: "Whisky", brand: "Cardhu"},
    {alcohol: "Whisky", brand: "DYC"},
    {alcohol: "Whisky", brand: "100 Pipers"},
    {alcohol: "Whisky", brand: "Jack Daniel´s"},
    {alcohol: "Whisky", brand: "John Dewars"},
    {alcohol: "Rum", brand: "Santa Teresa"},
    {alcohol: "Rum", brand: "Captain Morgan"},
    {alcohol: "Rum", brand: "Bacardí"},
    {alcohol: "Rum", brand: "Negrita"},
    {alcohol: "Rum", brand: "Barceló"},
    {alcohol: "Rum", brand: "Arehucas"},
    {alcohol: "Rum", brand: "Santa Cruz"},
    {alcohol: "Rum", brand: "Habana Club"},
    {alcohol: "Vodka", brand: "Absolut"},
    {alcohol: "Vodka", brand: "Grey Goose"},
    {alcohol: "Vodka", brand: "Smirnoff"},
    {alcohol: "Vodka", brand: "Svedka"},
    {alcohol: "Vodka", brand: "Eristoff"},
    {alcohol: "Vodka", brand: "Moskovskaya"},
    {alcohol: "Gin", brand: "Beefeater"},
    {alcohol: "Gin", brand: "Seagram´s"},
    {alcohol: "Gin", brand: "Martin Miller´s"},
    {alcohol: "Gin", brand: "Bulldog"},
    {alcohol: "Gin", brand: "Bombay Sapphire"},
    {alcohol: "Gin", brand: "Tanqueray"},
    {alcohol: "Gin", brand: "Larios"},
    {alcohol: "Gin", brand: "Gordon´s"}
  ]

  softs: Array<any> = [
    {soft: "Coca-Cola"},
    {soft: "Fanta Naranja"},
    {soft: "Fanta Limón"},
    {soft: "Schweppes"},
    {soft: "Water"},
    {soft: "Sprite"}
  ]

  constructor() { }

  confirmDrink

  getLocation(): Array<string> {

    let locations = [];
    for(let i = 0; i< this.clubs.length; i++){
      locations.push(this.clubs[i].location);
    }
    let unique = locations.filter(function(elem, index, self){
    return index == self.indexOf(elem);
  })
    return unique;
  }

  saveLocation(location) {
    this.location = location;
    console.log(this.location);
  }

  getClubs(): Array<string> {
    let location = this.location;
    let clubListObject = this.clubs.filter(function(elem){
      return location == elem.location;
    })
    let clubList = [];
    for(var i = 0; i< clubListObject.length; i++){
      clubList.push(clubListObject[i].club);
    }
    console.log(clubList);
    return clubList;
  }

  saveClub(club) {
    this.club = club;
    console.log(this.club);
  }

  getTypes(): Array<string> {
    let types = [];
    for(let i = 0; i < this.types.length; i++){
      types.push(this.types[i].type);
    }
    return types.sort();
  }

  saveType(type) {
    this.type = type;
    console.log(this.type)
  }

  getAlcohol(){
    let alcohols = [];
    for(let i = 0; i < this.alcohols.length; i++){
      alcohols.push(this.alcohols[i].alcohol);
    }
    let unique = alcohols.filter(function(elem, index, self){
    return index == self.indexOf(elem);
  })
    return unique.sort();
  }

  saveAlcohol(alcohol){
    this.alcohol = alcohol;
    console.log(this.alcohol)
  }

  getBrands(): Array<string> {
    let alcohol = this.alcohol;
    let brandListObject = this.alcohols.filter(function(elem){
      return alcohol == elem.alcohol;
    })
    let brandList = [];
    for(var i = 0; i< brandListObject.length; i++){
      brandList.push(brandListObject[i].brand);
    }
    console.log(brandList);
    return brandList.sort();
  }

  saveBrand(brand){
    this.brand = brand;
    console.log(this.brand)
  }

  getSofts(): Array<string> {
    let softs = [];
    for(let i = 0; i < this.softs.length; i++){
      softs.push(this.softs[i].soft);
    }
    return softs.sort();
  }

    saveSoft(soft) {
      this.soft = soft;
      console.log(this.soft)
    }
  }
/*
  getList(): Array<Object> {
    return this.contacts;
  }

  get(idContact: number): Object {
    return _.findWhere(this.contacts, { id: idContact });
  }

  edit(contact) {
    let idx = _.findIndex(this.contacts, { id: contact.id });
    if (idx >= 0) {
      this.contacts[idx] = contact;
    }
    return this.contacts[idx];

  }*/
