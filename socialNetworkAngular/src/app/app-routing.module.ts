import { NgModule } from '@angular/core';
//import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumComponent } from './forum/forum.component';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', pathMatch: 'full', redirectTo: 'auth/signup'},
  {path: '**', redirectTo: 'auth/signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [HeaderComponent]
})
export class AppRoutingModule { }
