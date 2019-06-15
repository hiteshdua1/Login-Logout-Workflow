import { ClickableComponent } from './clickable/clickable.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// ag-grid
import {AgGridModule} from 'ag-grid-angular';


// from rich component
import { RichComponent } from './rich/rich.component';
import { ClickableModule } from './clickable/clickable.module';
import {RatioModule} from './ratio/ratio.module';
import {RatioParentComponent} from './ratio/ratio.parent.component';
import { ClickableParentComponent } from './clickable.parent/clickable.parent.component';

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
import { DataService } from './services/data.service';

/*
 * App Routes
 */
import { appRoutes } from './app.routes';
import { SkillDashboardComponent } from './skill-dashboard/skill-dashboard.component';
import { SkillLeaderboardComponent } from './skill-leaderboard/skill-leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    UserDetailsComponent,
    StatusComponent,
    SkillDashboardComponent,
    SkillLeaderboardComponent,
    RichComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash : true }),
    HttpClientModule,
    AgGridModule.withComponents(
      [
          RatioParentComponent,
          ClickableParentComponent
      ]),
    RatioModule,
    ClickableModule
  ],
  providers: [
    AuthService,
    CookieService,
    UnauthenticatedRoutesGuard,
    AuthenticatedRoutesGuard,
    StatusService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
