import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../app.component';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-works-nav',
  templateUrl: './works-nav.component.html',
})
export class WorksNavComponent implements OnInit {

  theme = 'white';
  html = document.getElementsByTagName('html')[0];

  darkTheme = 'transform translate-x-0.4';
  lightTheme = 'transform -translate-x-6';

  ngOnInit(): void {
  }

  toggle(): void {
    if (this.theme === 'dark') {
      this.theme = 'white';
      this.html.classList.remove('dark');
      this.html.classList.add(this.theme);

    } else if (this.theme === 'white') {
      this.theme = 'dark';
      this.html.classList.remove('white');
      this.html.classList.add(this.theme);
    }
  }

}
