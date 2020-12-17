import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(false);
  private authToken: string;
  private userId: number;
  private userLevel: number;
  private userPseudo: string;
  
  constructor(private http: HttpClient,
              private router: Router) { }

    createUser(pseudo: string, email: string, password: string, level: string){
      return new Promise((resolve, reject)=>{
        this.http.post('http://localhost:3000/api/user/signup',{
          pseudo: pseudo,
          email: email,
          password: password,
          level: level})
          .subscribe((response: {id: number})=>{
            resolve(response);
                    },
                    (error)=>{
                      reject(error);
                    }
          )
      });
    }

    getToken() {
      return this.authToken;
    }

    getUserId() {
      return this.userId;
    }
    getUserLevel() {
      return this.userLevel;
    }

    getUserPseudo() {
      return this.userPseudo;
    }

    loginUser(email: string, password: string ){
      return new Promise((resolve, reject)=>{
        this.http.post('http://localhost:3000/api/user/login',{
          email: email,
          password: password,
          })
          .subscribe((response: {userId: number, userLevel: number, userPseudo: string, token: string })=>{
            this.authToken =  response.token;
            this.userId = response.userId;
            this.userLevel = response.userLevel;
            this.userPseudo = response.userPseudo;
            this.isAuth$.next(true)                     
            resolve();
            },
            (error)=>{
              reject(error);
            }
          )
      });
    }
    logout() {
      this.authToken = null;
      this.userId = null;
      this.isAuth$.next(false);
      this.router.navigate(['/auth','signin']);
    }
}
