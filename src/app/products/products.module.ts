import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductManagementComponent } from './product-management/product-management.component';
import { UnitMasterComponent } from './unit-master/unit-master.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [
    ProductManagementComponent,
    UnitMasterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    // primeng Modules
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,  
    MultiSelectModule,
    ConfirmDialogModule,
    FileUploadModule,
    ToastModule

    // primeng Modules
]
})
export class ProductsModule { }
