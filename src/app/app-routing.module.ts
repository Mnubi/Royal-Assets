import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './user-profile/userprofile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'users/:id',component: UserprofileComponent},
  {path: 'users/edit-profile/:id', component: UserEditComponent},
  {path: 'user/:id/dashboard', component: StaffDashboardComponent}, 
  {path: 'managers/:id',component:ManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
