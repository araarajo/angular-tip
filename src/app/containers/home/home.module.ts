import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouter } from './home.routes';
import { MenuNavComponent } from '../../components/menu-nav/menu-nav.component';
import { CountDownComponent } from '../count-down/count-down.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    CountDownComponent
  ],
  imports: [
    CommonModule,
    HomeRouter
  ],
  providers: [],
})
export class HomeModule {
}
