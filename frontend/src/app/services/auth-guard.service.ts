import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService,
              private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                return Observable.create((observer)=>{
                  this.auth.isAuth$.subscribe((auth)=>{
                    if(auth){
                      observer.next(true)
                    }else{
                      this.router.navigate(['/auth','signin'])
                    }
                  })
                });
              }
}
