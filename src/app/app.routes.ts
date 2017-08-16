import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/error/page-not-found.component';

const rootRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const RootRouter = RouterModule.forRoot(
  rootRoutes, { useHash: true }
);
