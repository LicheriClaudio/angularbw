import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/auth-m/service.service';

@Component({
  selector: 'app-form-registerclienti',
  templateUrl: './form-registerclienti.component.html',
  styleUrls: ['./form-registerclienti.component.scss']
})
export class FormRegisterclientiComponent implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;

  constructor(
    private Serviceservice: ServiceService,
    private router: Router) {}

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.form.value)
      this.Serviceservice.signclient(this.form.value).subscribe(
        resp => {
          console.log(resp);
          this.error = undefined;
          // this.router.navigate(['/aziende'])
        },
        err  => {
          console.log(err.error);
          this.error = err.error;
        }
      )
    }
}
