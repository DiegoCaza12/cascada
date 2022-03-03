import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VigilanteGuard implements CanActivate {
  constructor(
    
    private nat:NavController,
    private cookieService:CookieService
  ){}
  redirect(flag:boolean):any{
    if(!flag){
      this.nat.navigateRoot('/home')
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie=this.cookieService.check('token');
      this.redirect(cookie)
      return cookie;
  }
  
}
