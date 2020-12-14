import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavSkillsComponent } from './components/nav-skills/nav-skills.component';
import { LinkComponent } from './components/nav-skills/link/link.component';
import { LenguageSkillsComponent } from './components/nav-skills/lenguage-skills/lenguage-skills.component';
import { PlatformsSkillsComponent } from './components/nav-skills/platforms-skills/platforms-skills.component';
import { WebSkillsComponent } from './components/nav-skills/web-skills/web-skills.component';
import { DesignSkillsComponent } from './components/nav-skills/design-skills/design-skills.component';
import { ExternalLinksComponent } from './components/external-links/external-links.component';
import { WorksComponent } from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavSkillsComponent,
    LinkComponent,
    LenguageSkillsComponent,
    PlatformsSkillsComponent,
    WebSkillsComponent,
    DesignSkillsComponent,
    ExternalLinksComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
