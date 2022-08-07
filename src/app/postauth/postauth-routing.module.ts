import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostauthLayoutComponent } from './postauth-layout.component';

const routes: Routes = [
  {
    path:"",
    component:PostauthLayoutComponent,
    children:[
      {path:"", loadChildren:() => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:"employee", loadChildren:()=> import('./employee/employee.module').then(m=>m.EmployeeModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostauthRoutingModule { }
