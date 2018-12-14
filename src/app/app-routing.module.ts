import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * components
 * */
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RestoreComponent } from './components/restore/restore.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: LoginComponent
  },
  {
    path: 'restore',
    component: RestoreComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
