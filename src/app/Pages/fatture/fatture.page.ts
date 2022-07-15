import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder } from '@angular/forms';
import { Fattura } from 'src/app/auth-m/interface/fattura';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './fatture.page.html',
  styleUrls: ['./fatture.page.scss'],
})
export class FatturePage implements OnInit {
  @ViewChild('f') form!: NgForm;
  numid = 0;
  fatt: Fattura[] = [];
  cambio = false;
  private urlJsonServer = 'http://localhost:3000';
  error = undefined;
  fatturaData ={
    anno: '',
    cliente: '',
    data: '',
    importo: '',
    numero: '',
    stato: ''
  }

  modifybox = false;

  RegisterFormGroup = this._form.group({
    anno: ['', Validators.required],
    cliente: ['', Validators.required],
    data: ['', Validators.required],
    importo: ['', Validators.required],
    numero: ['', Validators.required],
    stato: ['', Validators.required],
  });

  cambio2 = false;
  currentid: number | undefined;
  fattura: any | undefined;
  constructor(
    private serviceService: ServiceService,
    private http: HttpClient,
    private _form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllFatture();
    console.log(this.fatt);
    this.cambio = false;
  }
  getAllFatture() {
    console.log('Chiamata Ajax al server');
    this.serviceService.authSubject.subscribe((userLogin) => {
      this.http
        .get<Fattura[]>('http://localhost:3000/fatture', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userLogin?.AccessToken,
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
    this.serviceService.authSubject.subscribe((userLogin) => {
      this.http
        .delete<Fattura[]>('http://localhost:3000/fatture/' + id, {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userLogin?.AccessToken,
          }),
        })
        .subscribe(
          (resp) => {
            console.log(resp);
            this.getAllFatture();
            this.cambio2 = false;
          }
          // err => {
          //   console.log(err)
          //   this.error = err.error
          // }
        );
    });
  }

  modify() {
    console.log(this.numid);
    {
      this.serviceService.authSubject.subscribe((userLogin) => {
        this.http
          .put<Fattura[]>(
            'http://localhost:3000/fatture/' + this.numid,
            {
              anno: this.form.value.anno,
              cliente: this.form.value.cliente,
              data: this.form.value.data,
              id: this.form.value.id,
              importo: this.form.value.importo,
              numero: this.form.value.numero,
              stato: this.form.value.stato,
            },
            {
              headers: new HttpHeaders({
                Authorization: 'Bearer ' + userLogin?.AccessToken,
              }),
            }
          )
          .subscribe((resp) => {
            this.getAllFatture();
            console.log(resp);

            this.cambio2 = false;
          });
      });
    }
  }

  modificaFatture(cliente: any) {
    return this.http.put<Fattura>(this.urlJsonServer + '/fatture/', cliente);
  }

  modifyF(id: number) {
    this.cambio = true;
    this.numid = id;
  }

  update() {
    this.cambio = false;
  }

  close() {
    this.cambio = false;
    this.cambio2 = false;
  }

  modifyFattura(id:number) {
    this.cambio = true;
    this.currentid = id;
    this.serviceService.authSubject.subscribe(userLogin => {
      this.http.get('http://localhost:3000/fatture/'+ this.currentid, {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.AccessToken})})
        .subscribe(
          resp => {
            this.fattura = resp;
            
            this.fatturaData.anno = this.fattura.anno;
            this.fatturaData.cliente = this.fattura.cliente;
            this.fatturaData.data = this.fattura.data;
            this.fatturaData.importo = this.fattura.importo;
            this.fatturaData.numero = this.fattura.numero;
            this.fatturaData.stato = this.fattura.stato;
            this.getAllFatture()
           
          }
          )
        })
    
  }


}
