import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Ireg } from '../interface/ireg';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  selector: 'form-field-prefix-suffix-example',
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  hide = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  error = undefined;

  RegisterFormGroup = this._form.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    role: ['', Validators.required],

  });


  constructor(
    private Serviceservice: ServiceService,
    private router: Router,
    private _form: FormBuilder) {}

  ngOnInit(): void {}

   invia() {
    let f: Ireg = {
      username : this.RegisterFormGroup.value.username || '',
      email : this.RegisterFormGroup.value.email || '',
      password : this.RegisterFormGroup.value.password || '',
      firstname : this.RegisterFormGroup.value.firstname|| '',
      lastname : this.RegisterFormGroup.value.lastname || '',
      role : this.RegisterFormGroup.value.role|| '',
    }
    //console.log(this.form.value)
    this.Serviceservice.signup(f).subscribe(
      (resp) => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err.error);
        this.error = err.error;
      }
    );


  }

}
