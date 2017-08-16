import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/error/page-not-found.component';
import { RootRouter } from './app.routes';
import { HomeModule } from './containers/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    RootRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
