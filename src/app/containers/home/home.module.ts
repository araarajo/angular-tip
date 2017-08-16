import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouter } from './home.routes';
import { MenuNavComponent } from '../../components/menu-nav/menu-nav.component';
import { CountDownComponent } from '../count-down/count-down.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    CountDownComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRouter
  ],
  providers: [],
})
export class HomeModule {
}
