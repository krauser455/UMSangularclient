import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //ng g c login --spec false --module=app-module (used by professor)
  //ng g c login --module app (used by me)
  constructor(private auth: AuthService, private router: Router) {
    auth.usersignedin.subscribe(
      (user: User) => {
        router.navigate(['/'])
      }
    );
  }

  ngOnInit() {
  }

  signIn(form: NgForm){
    if(!form.valid){
      return false;
    }
    this.auth.signIn(form.value.email, form.value.password);

  }

}
