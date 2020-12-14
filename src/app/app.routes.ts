import { RouterModule, Routes } from '@angular/router';
import { LenguageSkillsComponent } from './components/nav-skills/lenguage-skills/lenguage-skills.component';
import { PlatformsSkillsComponent } from './components/nav-skills/platforms-skills/platforms-skills.component';
import { WebSkillsComponent } from './components/nav-skills/web-skills/web-skills.component';
import { DesignSkillsComponent } from './components/nav-skills/design-skills/design-skills.component';

const APP_ROUTES: Routes = [
  { path: 'about-me/lenguage', component: LenguageSkillsComponent },
  { path: 'about-me/platforms', component: PlatformsSkillsComponent },
  { path: 'about-me/web', component: WebSkillsComponent },
  { path: 'about-me/design', component: DesignSkillsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lenguage' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
