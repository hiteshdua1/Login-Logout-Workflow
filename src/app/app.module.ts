import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    UserDetailsComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
