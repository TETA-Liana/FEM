import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup';
import { SigninComponent } from './pages/signin/signin';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  
  {
    path: '',
    component: AppComponent,   
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

