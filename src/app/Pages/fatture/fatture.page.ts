import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fattura } from 'src/app/auth-m/interface/fattura';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './fatture.page.html',
  styleUrls: ['./fatture.page.scss'],
})
export class FatturePage implements OnInit {
  fatt: Fattura[] = [];
  error = undefined;
  constructor(
    private serviceService: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    this.getAllFatture();
    console.log(this.fatt);
  }
  getAllFatture() {
    console.log('Chiamata Ajax al server');
    this.serviceService.authSubject.subscribe((userLogin) => {
      this.http
        .get<Fattura[]>('http://localhost:3000/fatture', {
          headers: new HttpHeaders({
            "Authorization": 'Bearer ' + userLogin?.AccessToken,
          }),
        })
        .subscribe(
          (resp) => {
            console.log(resp);
            this.fatt = resp;
          },
          (err) => {
            console.log(err);
            this.error = err.error;
          }
        );
    });
  }


removeFatture(id: number) {

  this.serviceService.authSubject.subscribe(userLogin => {
    this.http.delete<Fattura[]>('http://localhost:3000/fatture/'+ id, {
      headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.AccessToken})})
      .subscribe(
        resp => {
          console.log(resp)
          this.getAllFatture()

        },
        // err => {
        //   console.log(err)
        //   this.error = err.error
        // }
      )
  })
  }
}
