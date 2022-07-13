import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Clienti } from 'src/app/auth-m/interface/clienti';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './clienti.page.html',
  styleUrls: ['./clienti.page.scss']
})
export class ClientiPage implements OnInit {

  users: Clienti[] = [];
  error = undefined;

  constructor(private userService: ServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllclients()
  }

  getAllclients() {
    

    console.log('Chiamata Ajax al server')
    this.userService.authSubject.subscribe(userLogin => {
      this.http.get<Clienti[]>('http://localhost:3000/aziende', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.AccessToken})})
        .subscribe(
          resp => {
            console.log(resp)
            this.users = resp;
          },
          err => {
            console.log(err)
            this.error = err.error
          }
        )
    })

}
}
