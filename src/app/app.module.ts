import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutModule } from './layout/layout.module';
import { EstimateMasterComponent } from './estimate-master/estimate-master.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast'
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableModule } from 'primeng/table';
import { MyEstimatesComponent } from './my-estimates/my-estimates.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,    
    LayoutComponent,
    EstimateMasterComponent, 
    LoginComponent, MyEstimatesComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    HttpClientModule,
    DragDropModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
