import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import {DataTablesModule} from 'angular-datatables';
import { HospedeListComponent } from './hospede-list/hospede-list.component';
import { AddHospedeComponent } from './add-hospede/add-hospede.component';

@NgModule({
  declarations: [
    AppComponent,
     HospedeListComponent,
    AddHospedeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
