import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { RouterModule } from '@angular/router';
import { NgReduxRouterModule } from '@angular-redux/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule)
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
