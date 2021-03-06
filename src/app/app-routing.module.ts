import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './user-profile/userprofile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'users/:id',component: UserprofileComponent},
  {path: 'users/edit-profile/:id', component: UserEditComponent},
  {path: 'manager',component:ManagerComponent},
  {path: 'product',component:ProductComponent},
  {path: 'staff', component: StaffDashboardComponent}, 
  {path: 'admin',component:AdminComponent},
  {path: 'staff-asset',component:StaffComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
