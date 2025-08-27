import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Layout } from './components/layout/layout';
import { Navbar } from './components/layout/navbar/navbar';
import { Main } from './components/layout/main/main';
import { Footer } from './components/layout/footer/footer';
import { Projects } from './components/views/projects/projects';
import { Contact } from './components/views/contact/contact';
import { NotFound } from './components/views/not-found/not-found';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './components/views/project/project';
import { SharedModule } from './components/shared/shared-module';
import { Certificates } from './components/views/certificates/certificates';

@NgModule({
  declarations: [
    App,
    Layout,
    Navbar,
    Main,
    Footer,
    Projects,
    ProjectComponent,
    Contact,
    NotFound,
    Certificates
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
