import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './PAGES/contact/contact.component';
import { ExpertiseComponent } from './PAGES/expertise/expertise.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ProjectsComponent } from './PAGES/projects/projects.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'expertise', component: ExpertiseComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
