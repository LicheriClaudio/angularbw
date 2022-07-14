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
  modifybox = false;

  constructor(private userService: ServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllclients()
    this.modifybox = false;

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
            this.error = err.error;
          }
          
        )
        
    })
    

}

removeClient(id: number) {
 
  this.userService.authSubject.subscribe(userLogin => {
    this.http.delete<Clienti[]>('http://localhost:3000/aziende/'+ id, {
      headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.AccessToken})})
      .subscribe(
        resp => {
          console.log(resp)
          this.getAllclients()
         
        },
        // err => {
        //   console.log(err)
        //   this.error = err.error
        // }
      )
  })
  }


modifyClient() {
  
  this.modifybox = true;
}

update() {
  this.modifybox = false;
}

close() {
  this.modifybox = false;
}

}
