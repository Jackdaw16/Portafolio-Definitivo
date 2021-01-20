import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from './components/works/projects/projects.component';


const APP_ROUTES: Routes = [
  { path: 'index', component: ProjectsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true, anchorScrolling: 'enabled'});
