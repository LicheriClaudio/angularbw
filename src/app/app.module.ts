import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthMModule } from './auth-m/auth-m.module';
import { NavComponent } from './component/nav/nav.component';
import { ContactPage } from './Pages/contact/contact.page';
import { HomePage } from './Pages/home/home.page';
import { ProfilePage } from './Pages/profile/profile.page';
import { AboutusPage } from './Pages/aboutus/aboutus.page';
import { FatturePage } from './Pages/fatture/fatture.page';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { FormFattureComponent } from './component/form-fatture/form-fatture.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormRegisterclientiComponent } from './component/form-registerclienti/form-registerclienti.component';
import { ClientiPage } from './Pages/clienti/clienti.page';


import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactPage,
    HomePage,
    ProfilePage,
    AboutusPage,
    FatturePage,
    FormFattureComponent,
    FormRegisterclientiComponent,
    ClientiPage

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthMModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
