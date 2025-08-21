import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComingSoon} from './components/views/coming-soon/coming-soon';

const routes: Routes = [
  {path: 'coming-soon', component: ComingSoon, pathMatch: 'full'},
  {path: '', redirectTo: '/coming-soon', pathMatch: 'full'},
  {path: '**', redirectTo: '/coming-soon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
