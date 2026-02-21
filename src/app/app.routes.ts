import { Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'dashboard', component: DashboardComponent }
];