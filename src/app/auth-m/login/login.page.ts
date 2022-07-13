import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ireg } from '../interface/ireg';
import { Iusers } from '../interface/iusers';
import { ServiceService } from '../service.service';
@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hide = true;
  local = localStorage.length;
  error = undefined;

  json = localStorage.getItem('isAuthenticated');
  users: Iusers[] = [];
  user:Ireg[] = []
  use = '';
  @ViewChild('f') form!: NgForm;
  constructor(private Serviceservice: ServiceService, private router: Router) {}


  ngOnInit(): void {
    console.log('ngoninit funziona');

    this.Serviceservice.authSubject.subscribe((val) => console.log(val?.user));
    this.Serviceservice.authSubject.subscribe((val) => {
      this.use = `${val?.user.firstname}-${val?.user.lastname} `;
    });
  }
  /* onSubmit() {
    console.log(this.form.value);
  } */

  invia() {
    /* console.log(this.local);
    console.log(this.form.value); */
    this.Serviceservice.login(this.form.value).subscribe(
      (resp) => {
        console.log(resp);
        this.error = undefined;

        this.router.navigate(['home']);
      },
      (err) => {
        console.log(err.error);
        this.error = err.error;
      }
    );
  }
}
