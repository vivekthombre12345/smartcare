import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EstimateMasterComponent } from './estimate-master/estimate-master.component';
import { LoginComponent } from './login/login.component';
import { AuthgaurdService } from './services/authgaurd.service';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {
    path:'',
    component:LayoutComponent,
    canActivate:[AuthgaurdService],  
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path:'dashboard',loadChildren:()=> import('./dashboard/dashboard.module').then(m=> m.DashboardModule) },
      {path:'products',loadChildren:()=> import('./products/products.module').then(m=> m.ProductsModule) },
      {path:'estimate-master',component:EstimateMasterComponent}

    ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
