import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Users } from '../models/User.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 
  users$ = new Subject<Users[]>();

  constructor(private http: HttpClient,
              private auth: AuthService) {  }

  getProfile(){
    this.http.get('http://localhost:3000/api/user/profil/',{
      headers: {
        authorization: this.auth.getToken()
      }
    }).subscribe((users:Users[])=>{
      this.users$.next(users)
    },
    (error)=>{
      this.users$.next([]);
      console.error(error);
    })
  }
}
