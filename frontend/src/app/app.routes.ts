import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'DocuFind - Personal Document Search'
  },
  {
    path: '**',
    redirectTo: ''
  }
];