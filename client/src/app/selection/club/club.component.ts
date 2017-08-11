import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  clubs: Array<string>
  user: string;
    text = "&nbsp";

  constructor(
    private router: Router,
    private clubComponent: SelectionService,
    private session: SessionService
  ) {
}

  ngOnInit() {
      this.clubs = this.clubComponent.getClubs();
      this.user = this.session.user.name;
  }

  saveClubComponent(club) {
    this.clubComponent.saveClub(club);
    this.router.navigate(['/types']);
  }

  back(){
   this.router.navigate(['/locations']);
   }

}
