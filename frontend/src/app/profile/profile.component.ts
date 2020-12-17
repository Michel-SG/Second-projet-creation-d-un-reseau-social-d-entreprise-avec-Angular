import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pseudo: string;
  //email: string;
  //metier: string;
  constructor(private auth: AuthService) { }

  ngOnInit(){
    this.pseudo = this.auth.getUserPseudo();
    
  }

  


}
