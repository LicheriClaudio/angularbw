import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fattura } from 'src/app/auth-m/interface/fattura';
import { Iusers } from 'src/app/auth-m/interface/iusers';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  authSubject = new BehaviorSubject<Iusers | null>(null);
  utente = '';
  use = 'ciao ';
  error = undefined;
  users: Iusers[] = [];
  listF: Fattura[] = [];
  hidden = false;
  hidden2 = false;
  switch = false;
  local = localStorage.getItem('isAuthenticated');
  prs:any = undefined;
  constructor(
    private Serviceservice: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.local != null) {
      this.prs = JSON.parse(this.local)
      console.log(this.prs.accessToken)

    }
    this.getAllUsers();
    /*  this.getuser(); */
    this.Serviceservice.authSubject.subscribe((val) => {
      this.use = ` ${val?.user.email}`;
      this.utente = `${val?.user.firstname} -- ${val?.user.lastname}`;
    });
  }

  /* getuser() {
    this.Serviceservice.getAllUsers();
  } */
  change() {
    this.switch = true;
    console.log(this.switch);
    return this.switch;
  }



  getAllUsers() {
    console.log('Chiamata Ajax al server');
    this.authSubject.subscribe(() => {
      this.http
        .get<Iusers[]>('http://localhost:3000/users', {
          headers: new HttpHeaders({
            "Authorization": 'Bearer ' + this.prs.AccessToken,
          }),
        })
        .subscribe(
          (resp) => {
            console.log(resp);
            this.prs = resp;
          },
          (err) => {
            console.log(err);
            this.error = err.error;
          }
        );
    });
  }


}
