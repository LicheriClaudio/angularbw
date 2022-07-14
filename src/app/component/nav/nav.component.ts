import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  myname = 'Project ';
  profilo = ''
  constructor(private Serviceservice: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.Serviceservice.authSubject.subscribe((val) => {
      if (val !== null) {
        this.myname = '';
        this.myname = `Hey ${val?.user.firstname} ${val?.user.lastname}, Have a look`;
        this.profilo = val?.user.username
      } else {
        this.myname = 'Project';
      }
    });
  }

  logout() {
    this.Serviceservice.logout();
  }


}
