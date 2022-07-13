import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/auth-m/interface/iusers';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {

  displayedColumns: any[] = ['username', 'email', 'firstname', 'lastname', 'role'];
  dataSource: Iusers[] = [];
  error = undefined;

  constructor(private authService: ServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server')
    this.authService.authSubject.subscribe(userLogin => {
      this.http.get<Iusers[]>('http://localhost:4200/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.AccessToken})})
        .subscribe(
          resp => {
            console.log(resp)
            this.dataSource = resp;
          },
          err => {
            console.log(err)
            this.error = err.error
          }
        )
    })
  }

}


