import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private Serviceservice: ServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
   /*  return true; */return this.Serviceservice.authSubject.pipe(
      map((user) => !!user),
      map((userBool) => {
        if (userBool) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}


