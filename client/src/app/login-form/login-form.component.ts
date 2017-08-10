import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  error: string;

  formInfo= {
    email: '',
    password: ''
  }

successCb:any;

  constructor(
    private router: Router,
    private session: SessionService) { }
  ngOnInit() {
  }

  login() {
    console.log(this.formInfo);
    this.session.login(this.formInfo)
      .subscribe(
        (user) => {console.log(user);
        this.router.navigate(['/locations'])},
        (err) => this.error = err
      );
  }

}
