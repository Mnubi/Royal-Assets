import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './user-profile/userprofile.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthService } from './auth.service';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    UserprofileComponent,
    UserEditComponent,
    ManagerComponent,
    ProductComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }

