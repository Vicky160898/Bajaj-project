import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncentiveComponent } from './pages/incentive/incentive.component';
import { BusinessComponent } from './pages/business/business.component';
import { GoalsheetComponent } from './pages/goalsheet/goalsheet.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { SmpComponent } from './pages/smp/smp.component';
import { PersistencyComponent } from './pages/persistency/persistency.component';
import { DeadComponent } from './pages/dead/dead.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BusinessDataComponent } from './pages/business/business-data/business-data.component';
import { BusinessGraphComponent } from './pages/business/business-graph/business-graph.component';
import { NgChartsModule } from 'ng2-charts';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { PerformancematricsComponent } from './pages/performancematrics/performancematrics.component';
import { TicketraiseComponent } from './common/ticketraise/ticketraise.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    IncentiveComponent,
    BusinessComponent,
    GoalsheetComponent,
    NavbarComponent,
    DashboardComponent,
    SmpComponent,
    PersistencyComponent,
    DeadComponent,
    ProfileComponent,
    BusinessDataComponent,
    BusinessGraphComponent,
    PerformancematricsComponent,
    TicketraiseComponent,
    FaqComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    RoundProgressModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  



}
