import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/components/home/home.component';
import { AboutComponent } from './components/components/about/about.component';
import { ExcelComponent } from './components/components/excel/excel.component';

//importaciones del datatable//
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
