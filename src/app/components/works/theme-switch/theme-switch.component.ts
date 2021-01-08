import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
})
export class ThemeSwitchComponent implements OnInit {

  theme = 'white';
  html = document.getElementsByTagName('html')[0];

  darkTheme = 'transform translate-x-0.4';
  lightTheme = 'transform -translate-x-6';

  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
      console.log(localStorage.getItem('theme'));
      this.html.classList.add(this.theme);
    } else {
      return;
    }
  }

  toggle(): void {
    if (this.theme === 'dark') {
      this.theme = 'white';
      this.html.classList.remove('dark');
      this.html.classList.add(this.theme);

      localStorage.setItem('theme', this.theme);

    } else if (this.theme === 'white') {
      this.theme = 'dark';
      this.html.classList.remove('white');
      this.html.classList.add(this.theme);

      localStorage.setItem('theme', this.theme);
    }
  }

}
