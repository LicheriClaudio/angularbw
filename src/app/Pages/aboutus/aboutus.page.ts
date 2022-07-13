import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Iusers } from 'src/app/auth-m/interface/iusers';
import { ServiceService } from 'src/app/auth-m/service.service';



@Component({
  selector: 'grid-list-dynamic-example',

  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss']
})
export class AboutusPage implements OnInit {
  tiles: Tile[] = [
    {text: 'La nostra policy lorem ipsum dolor sit amet', cols: 3, rows: 1, color: 'lightblue'},
    {text: '', cols: 3, rows: 1, color: 'lightblue'},

  ];

  customer='';
  user:Iusers[] = [];


  constructor(private Serviceservice: ServiceService,
              private http: HttpClient
    ) {

  }

  ngOnInit(): void {
    this.Serviceservice.authSubject.subscribe((param) => {
      this.customer=`${param?.user.username}-${param?.user.lastname}`;
    })
  }

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}



