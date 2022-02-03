import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {
    
  constructor(
    private service:LoginComponent,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
      var isAuthenticated = this.service.getUser();
      if(this.service.role === 1){
        
      }
    return true;
  }
  
}
