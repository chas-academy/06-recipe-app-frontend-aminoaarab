import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: AuthenticationService,
    private router: Router,
  ) { }

  public form = {
    email: null,
    password: null
  }

  public error = null;

  onSubmit() {
    this.service.login(this.form).subscribe(
      data => this.handleResponse(data),
      err => this.handleError(err)
      )
  }

  handleResponse(data) {
    this.router.navigateByUrl('/recipes-list');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}