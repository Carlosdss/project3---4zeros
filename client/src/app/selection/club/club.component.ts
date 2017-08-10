import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  clubs: Array<string>
    text = "&nbsp";

  constructor(
    private router: Router,
    private clubComponent: SelectionService
  ) {
}

  ngOnInit() {
      this.clubs = this.clubComponent.getClubs()
  }

  saveClubComponent(club) {
    this.clubComponent.saveClub(club);
    this.router.navigate(['/types']);
  }

  back(){
   this.router.navigate(['/locations']);
   }

}
