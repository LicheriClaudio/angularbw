import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Iusers } from 'src/app/auth-m/interface/iusers';
import { ServiceService } from 'src/app/auth-m/service.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'grid-list-dynamic-example',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss']
})
export class AboutusPage implements OnInit {
  tiles: Tile[] = [
    {text: 'DICONO DI NOI', cols: 2, rows: 1, color: ''},
   // {text: 'lorem ipsum dolor sit amet, consectetur adipiscing el', cols: 3, rows: 1, color: 'lightblue'},

  ];

/*
  @ViewChild('f') form!: NgForm;
  private _form!: NgForm;
  public get form(): NgForm {
    return this._form;
  }
  public set form(value: NgForm) {
    this._form = value;
  }

  Commenti = this._form.group({
    comment:[''],
   });*/



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


