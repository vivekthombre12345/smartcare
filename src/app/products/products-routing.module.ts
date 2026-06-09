import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { UnitMasterComponent } from './unit-master/unit-master.component';

const routes: Routes = [
    {path:'',component:ProductManagementComponent},
    {path:'unit-master',component:UnitMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
