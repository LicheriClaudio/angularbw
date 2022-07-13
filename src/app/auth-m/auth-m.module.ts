import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, NgForm, ReactiveFormsModule,  } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule

  ],
})
export class AuthMModule {}
