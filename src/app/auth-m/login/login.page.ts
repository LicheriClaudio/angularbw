import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  hide = true;
  @ViewChild('f') form!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
