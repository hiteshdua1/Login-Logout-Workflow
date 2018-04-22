import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StatusComponent } from './status/status.component';
import { AuthService } from './services/auth.service';
import { CookieService } from './services/cookie.service';
import { UnauthenticatedRoutesGuard } from './services/unauthenticated-routes-guard.service';
import { AuthenticatedRoutesGuard } from './services/authenticated-routes-guard.service';
import { StatusService } from './services/status.service';
/*
 * App Routes
 */
import { appRoutes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    UserDetailsComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash : true }),
    HttpClientModule
  ],
  providers: [
    AuthService,
    CookieService,
    UnauthenticatedRoutesGuard,
    AuthenticatedRoutesGuard,
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
