import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-nav',
  templateUrl: './responsive-nav.component.html',
})
export class ResponsiveNavComponent implements OnInit {
  isHidden = true;
  hidden = 'hidden';
  notHidden = 'flex';

  hiddeAnim = 'transform translate-x-full flex';
  showAnim = 'transform translate-x-0.4 flex';

  theme = 'white';
  html = document.getElementsByTagName('html')[0];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
      console.log(localStorage.getItem('theme'));
      this.html.classList.add(this.theme);
    } else {
      return;
    }
  }

  showAndHidde(): void {
    if (this.isHidden) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }

  smoothScroll(idName: string): void {
    document.getElementById(idName).scrollIntoView({behavior: 'smooth'});
    console.log('entro');
  }

}
