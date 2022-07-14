import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Clienti } from 'src/app/auth-m/interface/clienti';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  templateUrl: './clienti.page.html',
  styleUrls: ['./clienti.page.scss']
})
export class ClientiPage implements OnInit {


  @ViewChild('f') form!: NgForm;
  hide = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  error = undefined;
  currentid = 0;
  

  ClientRegisterFormGroup = this._form.group({
    ragioneSociale: ['', Validators.required],
    telefono: ['', Validators.required],
    nomeContatto: ['', Validators.required],
    emailAziendale: ['', Validators.required],

  });

  users: Clienti[] = [];
  removeselcted = false;
  modifybox = false;

  constructor(private userService: ServiceService, private http: HttpClient,
    private _form: FormBuilder) { }

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

checkremove (id:number) {
  
  this.removeselcted = true;
  this.currentid = id;
}

removeClient() {
  
  this.userService.authSubject.subscribe(userLogin => {
    this.http.delete<Clienti[]>('http://localhost:3000/aziende/'+ this.currentid, {
      headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.AccessToken})})
      .subscribe(
        resp => {
          console.log(resp)
          this.getAllclients()
          this.removeselcted = false;
        },
        // err => {
        //   console.log(err)
        //   this.error = err.error
        // }
      )
  })
  }


modifyClient(id:number) {
  this.modifybox = true;
  this.currentid = id;
}

update() {
  this.modifybox = false;
}

close() {
  this.modifybox = false;
  this.removeselcted = false;
}

modify() {
  console.log(this.currentid)
  {
 
    this.userService.authSubject.subscribe(userLogin => {
      this.http.put<Clienti[]>('http://localhost:3000/aziende/'+ this.currentid,{
        ragioneSociale: this.form.value.ragioneSociale,
        emailAziendale: this.form.value.emailAziendale,
        nomeContatto:this.form.value.nomeContatto,
        telefono: this.form.value.telefono
    }, {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.AccessToken})})
        .subscribe(
          resp => {
            console.log(resp)
            this.getAllclients()
            this.modifybox = false;
          },
          // err => {
          //   console.log(err)
          //   this.error = err.error
          // }
        )
    })
    }
}

}
