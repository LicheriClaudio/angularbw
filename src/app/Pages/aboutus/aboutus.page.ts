import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Iusers } from 'src/app/auth-m/interface/iusers';
import { ServiceService } from 'src/app/auth-m/service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'grid-list-dynamic-example',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss']
})
export class AboutusPage implements OnInit {
  tiles: Tile[] = [
    {text: 'DICONO DI NOI', cols: 2, rows: 1, color: '', },

   // {text: 'lorem ipsum dolor sit amet, consectetur adipiscing el', cols: 3, rows: 1, color: 'lightblue'},

  ];


/*   @ViewChild('f') form!: NgForm;


  Commenti = this._form.group({
    comment:[''],
   }); */

   @ViewChild('f') form!: NgForm;
   error = undefined;



  customer='';
  user:Iusers[] = [];
  Commenti:string[] = [];


  constructor(private Serviceservice: ServiceService,
              private http: HttpClient,
              private router: Router
    ) {

  }

  ngOnInit(): void {
    this.Serviceservice.authSubject.subscribe((param) => {
      this.customer=`${param?.user.username}-${param?.user.lastname}`;
    })

  }

  onSubmit() {
    console.log(this.form.value)
    this.Commenti.push(this.form.value);



/*       this.Serviceservice.Commenti(this.form.value).subscribe(
        resp => {
          console.log(resp);
          this.error = undefined;
          this.router.navigate(['/clienti_request'])
        },
        err  => {
          console.log(err.error);
          this.error = err.error;
        }
      ) */




}

}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  }
