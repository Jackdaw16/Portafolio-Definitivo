import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  theme = 'white';
  html = document.getElementsByTagName('html')[0];

  isShowSplash = true;

  public constructor(private titleService: Title) { }

  title = 'Juan Alejandro Demetrio Calderín';

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    setInterval(() => {
      this.isShowSplash = false;
    }, 6300);

    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
      console.log(localStorage.getItem('theme'));
      this.html.classList.add(this.theme);
    } else {
      return;
    }

  }

}
