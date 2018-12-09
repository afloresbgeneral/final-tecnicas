import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ManageReportComponent } from './components/manage-report/manage-report.component';
import { ManagePasswordComponent } from './components/manage-password/manage-password.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { ManageEmployeesComponent } from './components/manage-employees/manage-employees.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'manage-report', component: ManageReportComponent},
  {path: 'manage-employees', component: ManageEmployeesComponent},
  {path: 'create-user', component: ManagePasswordComponent},
  {path: 'final-report', component: FinalReportComponent},
  {path: '**', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
