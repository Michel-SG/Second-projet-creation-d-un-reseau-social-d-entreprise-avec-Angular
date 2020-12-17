import { NgModule } from '@angular/core';
//import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumComponent } from './forum/forum.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import {  AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'profile', canActivate:[AuthGuardService], component: ProfileComponent},
  {path: 'forum', canActivate:[AuthGuardService], component: ForumComponent},
  {path: 'admin', canActivate:[AuthGuardService], component: AdminComponent},
  {path: 'admin', canActivate:[AuthGuardService], component: AdminComponent},
  {path: '', pathMatch: 'full', redirectTo: 'auth/signup'},
  {path: '**', redirectTo: 'auth/signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [HeaderComponent]
})
export class AppRoutingModule { }
