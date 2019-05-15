import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private service: UsersService,
    private router: Router,
  ) { }

  public form = {
    name: null,
    email: null,
    password: null,
  }

  public error = [];

  ngOnInit() {
  }

  onSubmit() {
    this.service.signup(this.form).subscribe(
      data => this.handleResponse(data),
      err => this.handleError(err)
    )
  }

  handleResponse(data) {
    this.router.navigateByUrl('/login');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}