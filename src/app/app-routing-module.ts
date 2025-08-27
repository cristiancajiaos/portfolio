import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Projects } from './components/views/projects/projects';
import { Contact } from './components/views/contact/contact';
import { NotFound } from './components/views/not-found/not-found';
import { ProjectComponent } from './components/views/project/project';
import { Certificates } from './components/views/certificates/certificates';

const routes: Routes = [
  {path: 'projects', component: Projects, pathMatch: 'full'},
  {path: 'project/:id', component: ProjectComponent, pathMatch: 'full'},
  {path: 'certificates', component: Certificates, pathMatch: 'full'},
  {path: 'contact', component:  Contact, pathMatch: 'full'},
  {path: 'not-found', component: NotFound, pathMatch: 'full'},
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
