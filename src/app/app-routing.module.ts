import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth-m/guard.guard';
import { LoginPage } from './auth-m/login/login.page';
import { RegisterPage } from './auth-m/register/register.page';
import { FormFattureComponent } from './component/form-fatture/form-fatture.component';
import { FormRegisterclientiComponent } from './component/form-registerclienti/form-registerclienti.component';
import { AboutusPage } from './Pages/aboutus/aboutus.page';
import { ClientiPage } from './Pages/clienti/clienti.page';
import { ContactPage } from './Pages/contact/contact.page';
import { FatturePage } from './Pages/fatture/fatture.page';
import { HomePage } from './Pages/home/home.page';
import { ProfilePage } from './Pages/profile/profile.page';

const routes: Routes = [

  {
    path:'app-form-registerclienti',
    component: FormFattureComponent
  },
  {
    path: 'fatture',
    /* canActivate: [GuardGuard], */
    /* loadChildren: () =>
      import('./Pages/fatture/fatture.page').then((m) => m.FatturePage), */
    component: FatturePage,
  },
  {
    path: 'aboutus',
    canActivate: [GuardGuard],
    /*  loadChildren: () =>
      import('./Pages/aboutus/aboutus.page').then((m) => m.AboutusPage), */
    component: AboutusPage,
  },
  {
    path: 'profile',
    canActivate: [GuardGuard],
    /* loadChildren: () =>
      import('./Pages/profile/profile.page').then((m) => m.ProfilePage), */
    component: ProfilePage,
  },
  {
    path: 'home',
    canActivate: [GuardGuard],
    /* loadChildren: () =>
      import('./Pages/home/home.page').then((m) => m.HomePage), */
    component: HomePage,
  },
  {
    path: 'contact',
    canActivate: [GuardGuard],
    /* loadChildren: () =>
      import('./Pages/contact/contact.page').then((m) => m.ContactPage), */
    component: ContactPage,
  },
  {
    path: 'login',

    component: LoginPage,
  },
  {
    path: 'registerclienti',
    /* canActivate: [GuardGuard], */
    /* loadChildren: () =>
      import('./Pages/fatture/fatture.page').then((m) => m.FatturePage), */
    component: FormRegisterclientiComponent,
  },
  {
    path: 'clienti',
    /* canActivate: [GuardGuard], */
    /* loadChildren: () =>
      import('./Pages/fatture/fatture.page').then((m) => m.FatturePage), */
    component: ClientiPage,
  },

  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    loadChildren: () =>
      import('./auth-m/login/login.page').then((m) => m.LoginPage),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
