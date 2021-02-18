import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
})
export class SplashscreenComponent implements OnInit {

  windowsWidth: string;
  showSplash = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.windowsWidth = 'transition duration-600 ease-in opacity-0';
      setTimeout(() => {
        this.showSplash = false;
      }, 600);
    }, 6000);
  }

}
