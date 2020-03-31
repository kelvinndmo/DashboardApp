import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskTwoComponent } from './components/task-two/task-two.component';


const routes: Routes = [
  {
    path: 'overview',
    component: DashboardComponent,
  },
  {
    path: 'transcations',
    component: TaskTwoComponent
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
