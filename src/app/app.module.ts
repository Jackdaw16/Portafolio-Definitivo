import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavSkillsComponent } from './components/nav-skills/nav-skills.component';
import { LenguageSkillsComponent } from './components/nav-skills/lenguage-skills/lenguage-skills.component';
import { PlatformsSkillsComponent } from './components/nav-skills/platforms-skills/platforms-skills.component';
import { WebSkillsComponent } from './components/nav-skills/web-skills/web-skills.component';
import { DesignSkillsComponent } from './components/nav-skills/design-skills/design-skills.component';
import { WorksComponent } from './components/works/works.component';
import { ProjectsComponent } from './components/works/projects/projects.component';
import { ThemeSwitchComponent } from './components/works/theme-switch/theme-switch.component';
import { FooterComponent } from './components/footer/footer.component';
import { DesignsComponent } from './components/works/designs/designs.component';
import { AnimationsComponent } from './components/works/animations/animations.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResponsiveNavComponent } from './components/responsive-nav/responsive-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavSkillsComponent,
    LenguageSkillsComponent,
    PlatformsSkillsComponent,
    WebSkillsComponent,
    DesignSkillsComponent,
    WorksComponent,
    ProjectsComponent,
    ThemeSwitchComponent,
    FooterComponent,
    DesignsComponent,
    AnimationsComponent,
    NavigationComponent,
    ResponsiveNavComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
