import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Layout } from './components/layout/layout';
import { Navbar } from './components/layout/navbar/navbar';
import { Main } from './components/layout/main/main';
import { Footer } from './components/layout/footer/footer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Projects } from './components/views/projects/projects';
import { Contact } from './components/views/contact/contact';
import { NotFound } from './components/views/not-found/not-found';
import { RouterModule } from '@angular/router';
import { Project } from './components/views/project/project';

@NgModule({
  declarations: [
    App,
    Layout,
    Navbar,
    Main,
    Footer,
    Projects,
    Contact,
    NotFound,
    Project
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
