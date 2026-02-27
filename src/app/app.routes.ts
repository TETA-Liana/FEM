import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup';
import { SigninComponent } from './pages/signin/signin';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExtinguishersComponent } from './pages/extinguishers/extinguishers.component';
import { ServiceRequestsComponent } from './pages/service-requests/service-requests.component';
import { InspectorsOverviewComponent } from './pages/inspectors-overview/inspectors-overview.component';
import { LocationsDashboardComponent } from './pages/locations-dashboard/locations-dashboard.component';
import { AddExtinguisher } from './pages/add-extinguisher/add-extinguisher';
import { Reports } from './pages/reports/reports';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'extinguishers', component: ExtinguishersComponent },
  { path: 'service-requests', component: ServiceRequestsComponent },
  { path: 'inspectors', component: InspectorsOverviewComponent },
  { path: 'locations', component: LocationsDashboardComponent },
  { path: 'add-extinguisher', component: AddExtinguisher },
  { path: 'reports', component: Reports },
  { path: 'shop', component: Shop },
  { path: 'cart', component: Cart }
];

