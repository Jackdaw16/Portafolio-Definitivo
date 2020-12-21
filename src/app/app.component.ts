import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  public constructor(private titleService: Title) { }

  title = 'Juan Alejandro Demetrio Calderín';

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
