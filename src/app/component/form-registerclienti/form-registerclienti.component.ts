import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  selector: 'app-form-registerclienti',
  templateUrl: './form-registerclienti.component.html',
  styleUrls: ['./form-registerclienti.component.scss']
})
export class FormRegisterclientiComponent implements OnInit {

  @ViewChild('f') form!: NgForm;
  hide = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  error = undefined;
  

  ClientRegisterFormGroup = this._form.group({
    ragioneSociale: ['', Validators.required],
    partitaIva: ['', Validators.required],
    pec: ['', Validators.required],
    telefono: ['', Validators.required],
    nomeContatto: ['', Validators.required],
    cognomeContatto: ['', Validators.required],
    telefonoContatto: ['', Validators.required],
    emailAziendale: ['', Validators.required],
    emailContatto: ['', Validators.required],
    via: ['', Validators.required],
    cap: ['', Validators.required],
    civico: ['', Validators.required],
    comune: ['', Validators.required],
    provincia: ['', Validators.required],
    dataInserimento: ['', Validators.required],
    dataUltimoContatto: ['', Validators.required],

  });

  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private _form: FormBuilder) {}

  ngOnInit(): void {
  }

    


  onSubmit() {

    
    
      this.Serviceservice.signclient(this.form.value).subscribe(
        resp => {
          console.log(resp);
          this.error = undefined;
          this.router.navigate(['/clienti'])
        },
        err  => {
          console.log(err.error);
          this.error = err.error;
        }
      )
    }
}
