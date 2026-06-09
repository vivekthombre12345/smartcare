import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Example: check token in localStorage
    const isLoggedIn = !!localStorage.getItem('token');    

    if (isLoggedIn) {
      return true; // allow route
    } else {
      this.router.navigate(['/login']);
      return false; // block route
    }
  }
}