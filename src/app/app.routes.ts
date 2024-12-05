import { Routes } from '@angular/router';
import { RegisterCompany } from './registerPage/register';
import { AppOrder } from './orderDeatails/order';
import { EditCompany } from './editCompany/editCompany';

export const routes: Routes = [
  { title: 'order', path: '', component: AppOrder },
  { title: 'register', path: 'register-company', component: RegisterCompany },
  { title: 'edit', path: 'edit-company/:id', component: EditCompany },
];
