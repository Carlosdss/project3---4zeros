import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
 formInfo= {
   name: '',
   lastName: '',
   email: '',
   password: '',
   dateOfBirth: '',
   cityOfResidence: '',
   mobileNumber: ''
 }
 successCb:any;

  constructor(
    private router: Router,
    private session: SessionService) { }

  ngOnInit() {
  }

  signup() {
    console.log(this.formInfo);
    this.session.signup(this.formInfo)
    .subscribe(
      (user) => {
        console.log(user)
        this.router.navigate(['/locations'])
      } ,
      (err) => console.log(err)
    );
  }


}
