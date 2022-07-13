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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactPage,
    HomePage,
    ProfilePage,
    AboutusPage,
    FatturePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthMModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
