import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service';
import { Users } from '../models/User.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users: Users[];
  pato;
  pata;
  loading: boolean;
  errorMsg: string;
  userSub: Subscription; 

  constructor(private auth: AuthService,
              private user: PostsService) { }

  
  ngOnInit(){
    this.loading = true;
    this.userSub = this.user.users$.subscribe((user)=>{
      this.users = user;
      this.pato = user[0];
      this.pata= this.pato.pseudo;
      console.log(this.users);
      this.loading = false;
      this.errorMsg = null;
    },
    (error)=>{
      this.errorMsg = error.message;
      this.loading = false;
    });
    this.user.getProfile();
    
  }

  


}
