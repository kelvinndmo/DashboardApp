import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskTwoComponent } from './components/task-two/task-two.component';

import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskTwoComponent,
    DashboardComponent,
    LineChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
