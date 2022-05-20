import { throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin', 
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User;
  loginError = false;

  constructor(private authService: AuthService,private router: Router ) { }

  ngOnInit() {
  }
  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;


      this.authService.login(username, password).subscribe( resp => {
        console.log(resp);
        if (resp) {
          this.authService.setLoggedIn(true);
          localStorage.setItem('token', resp.token);
          this.router.navigate(['/']);
        } 
        },
        (error) => {
          this.loginError = true;
          this.authService.setLoggedIn(false);
          throwError(error);
        });

  }

}

