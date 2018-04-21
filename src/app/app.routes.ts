/*
 * Angular Routes
 */
import {  Routes } from '@angular/router';
/*
 * App Components and Services
 */
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UnauthenticatedRoutesGuard } from './services/unauthenticated-routes-guard.service';
import { AuthenticatedRoutesGuard } from './services/authenticated-routes-guard.service';

/*
 * App Routes
 */
export const appRoutes: Routes = [
    // Redirect to welcome route if no route is specified
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', canActivate: [UnauthenticatedRoutesGuard], component: WelcomeComponent },
    { path: 'login',  canActivate: [UnauthenticatedRoutesGuard], component: LoginComponent },
    { path: 'user-details', canActivate: [AuthenticatedRoutesGuard], component: UserDetailsComponent },
    { path: '**', component: WelcomeComponent }
  ];
