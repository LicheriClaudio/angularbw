import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, tap } from 'rxjs';
import { Clienti } from './interface/clienti';
import { Fattura } from './interface/fattura';
import { Ireg } from './interface/ireg';
import { Iusers } from './interface/iusers';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  authSubject = new BehaviorSubject<Iusers | null>(null);
  private urlJsonServer = 'http://localhost:3000';
  users: Iusers[] = [];
  helper = new JwtHelperService();
  reg: Ireg[] = [];
  fatt: Fattura[] = [];
  error = undefined;

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUserLogin();
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server');
    this.authSubject.subscribe((userLogin) => {
      this.http
        .get<Iusers[]>('http://localhost:3000/contact', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userLogin?.AccessToken,
          }),
        })
        .subscribe(
          (resp) => {
            console.log(resp);
            this.users = resp;
          },
          (err) => {
            console.log(err);
            this.error = err.error;
          }
        );
    });
  }

  restoreUserLogin() {
    const json = localStorage.getItem('isAuthenticated');
    if (json) {
      const user = JSON.parse(json);
      if (this.helper.isTokenExpired(user.accessToken)) {
        localStorage.removeItem('isAuthenticated');
        return;
      } else {
        this.authSubject.next(user);
      }
    }
  }

  login(obj: Ireg) {
    return this.http.post<Iusers>(this.urlJsonServer + '/login', obj).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('isAuthenticated', JSON.stringify(data));
      })
    );
  }

  signup(obj: Ireg) {
    return this.http.post(this.urlJsonServer + '/register', obj);
  }

  logout() {
    console.log('Logout');
    this.authSubject.next(null);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
    location.reload();
  }



  getAllFatture() {
    console.log('Chiamata Ajax al server');
    this.authSubject.subscribe((userLogin) => {
      this.http
        .get<Fattura[]>('http://localhost:3000/fatture', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userLogin?.AccessToken,
          }),
        })
        .subscribe(
          (resp) => {
            console.log(resp);
            this.fatt = resp;
          },
          (err) => {
            console.log(err);
            this.error = err.error;
          }
        );
    });
  }

  sendFattura(obj: Fattura) {
    return this.http.post(this.urlJsonServer + '/fatture', obj);
  }

  signclient(obj: Clienti) {
    return this.http.post(this.urlJsonServer + '/aziende', obj);
  }





removeclient(id:number){
  return this.http.delete<Clienti>(this.urlJsonServer+'/aziende/' + id);

  // return this.http.delete<Clienti>('http://localhost:3000/users/2/')
  //   .subscribe(resp => {
  //       console.log(resp);
  //   })

}

modifyclient(id:number, cliente:any){
  return this.http.put<Clienti>(this.urlJsonServer+'/aziende/', cliente);
}


}
