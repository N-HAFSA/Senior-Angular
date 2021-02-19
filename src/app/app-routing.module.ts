import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospedeListComponent } from './hospede-list/hospede-list.component';
import { AddHospedeComponent } from './add-hospede/add-hospede.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-hospede', pathMatch: 'full' },
  { path: 'view-hospede', component: HospedeListComponent },
  { path: 'add-hospede', component: AddHospedeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
