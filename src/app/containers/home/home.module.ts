import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouter } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRouter
  ],
  providers: [],
})
export class HomeModule {
}
