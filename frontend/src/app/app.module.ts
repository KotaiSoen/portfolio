import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './PAGES/home/home.component';
import { ExpertiseComponent } from './PAGES/expertise/expertise.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { ProjectsComponent } from './PAGES/projects/projects.component';
import { LinksComponent } from './PAGES/links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpertiseComponent,
    ContactComponent,
    ProjectsComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
