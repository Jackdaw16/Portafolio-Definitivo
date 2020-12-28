import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from './components/works/projects/projects.component';
import {AboutMeComponent} from './components/about-me/about-me.component';


const APP_ROUTES: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'projects' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
