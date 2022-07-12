import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/auth-m/interface/iusers';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  utente = '';
  use = 'ciao ';
  error = undefined;
  users: Iusers[] = [];
  hidden = false;
  hidden2 = false;
  constructor(
    private Serviceservice: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
     this.Serviceservice.authSubject.subscribe((val) => {
       this.use = ` ${val?.user.email}`;
       this.utente = `${val?.user.firstname} -- ${val?.user.lastname}`;
     });
  }
}
