import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './user-profile/userprofile.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEditComponent } from './user-edit/user-edit.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ManagerComponent } from './manager/manager.component';
import { RequestService } from './services/request.service';
import { ProductComponent } from './product/product.component';
import { NavlogComponent } from './navlog/navlog.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StaffComponent } from './staff/staff.component';
import { AssetFormComponent } from './asset-form/asset-form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    UserprofileComponent,
    UserEditComponent,
    StaffDashboardComponent,
    ManagerComponent,
    ProductComponent,
    NavComponent,
    AdminComponent,
    RequestFormComponent,
    AddStaffComponent,
    StaffComponent,
    AssetFormComponent,
    FooterComponent,
    NavlogComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
    
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})

export class AppModule { }

