import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { ManagePasswordComponent } from './components/manage-password/manage-password.component';
import { ManageReportComponent } from './components/manage-report/manage-report.component';
import { ManageEmployeesComponent } from './components/manage-employees/manage-employees.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { UserService } from './components/services/user.service';
import { ApplyTestComponent } from './components/apply-test/apply-test.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    FinalReportComponent,
    ManagePasswordComponent,
    ManageEmployeesComponent,
    ManageReportComponent,
    ApplyTestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
