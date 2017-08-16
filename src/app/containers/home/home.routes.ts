import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CountDownComponent } from '../count-down/count-down.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'countdown', component: CountDownComponent }
    ]
  }
];

export const HomeRouter = RouterModule.forChild(
  homeRoutes
);
