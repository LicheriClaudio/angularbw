import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fattura } from 'src/app/auth-m/interface/fattura';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  selector: 'app-form-fatture',
  templateUrl: './form-fatture.component.html',
  styleUrls: ['./form-fatture.component.scss']
})
export class FormFattureComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  hide = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  error = undefined;


  RegisterFormGroup = this._form.group({
    anno: ['', Validators.required],
    cliente: ['', Validators.required],
    data: ['', Validators.required],
    importo: ['', Validators.required],
    numero: ['', Validators.required],
    stato: ['', Validators.required],

  });


  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private _form: FormBuilder) {}

  ngOnInit(): void {}

   invia() {
    let f: Fattura = {
      anno : Number(this.RegisterFormGroup.value.anno || ''),
      cliente : this.RegisterFormGroup.value.cliente || '',
      data : this.RegisterFormGroup.value.data || '',
      importo : Number(this.RegisterFormGroup.value.importo|| ''),
      numero : Number(this.RegisterFormGroup.value.numero || ''),
      stato : this.RegisterFormGroup.value.stato|| '',
    }
    //console.log(this.form.value)
    this.Serviceservice.sendFattura(f).subscribe(
      (resp) => {
        console.log(resp);
        this.error = undefined;
       /*  this.router.navigate(['/login']); */
      },
      err => {
        console.log(err.error);
        this.error = err.error;
      }
    );
  }

}
