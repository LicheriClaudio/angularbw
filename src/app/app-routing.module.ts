import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth-m/login/login.page';
import { RegisterPage } from './auth-m/register/register.page';
import { AboutusPage } from './Pages/aboutus/aboutus.page';
import { ContactPage } from './Pages/contact/contact.page';
import { FatturePage } from './Pages/fatture/fatture.page';
import { HomePage } from './Pages/home/home.page';
import { ProfilePage } from './Pages/profile/profile.page';

const routes: Routes = [
  {
    path: 'fatture',
    component: FatturePage,
  },
  {
    path: 'aboutus',
    component: AboutusPage,
  },
  {
    path: 'profile',
    component: ProfilePage,
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },

  {
    path: 'register',
    component: RegisterPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
