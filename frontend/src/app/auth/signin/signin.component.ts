import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signupForm: FormGroup;
  loading: boolean;
  errorMsg: string;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  
  onSubmitForm(){
    this.loading= true;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.auth.loginUser(email, password)
    .then(() =>{
      this.loading = false;
      this.router.navigate(['/forum']);
    })
    .catch((error)=>{
      this.loading = false;
      console.error(error);
      this.errorMsg = error.message;
      
    });

  }

}
