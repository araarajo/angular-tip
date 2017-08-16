import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CountDownComponent } from '../count-down/count-down.component';
import { FormComponent } from '../form/form.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'countdown', component: CountDownComponent },
      { path: 'form', component: FormComponent }
    ]
  }
];

export const HomeRouter = RouterModule.forChild(
  homeRoutes
);
