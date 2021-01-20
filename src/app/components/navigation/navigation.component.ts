import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

  constructor( private viewportScroller: ViewportScroller) { }

  active = 'bg-primary';
  notActive = 'bg-secondary';

  ngOnInit(): void {
  }

  smoothScroll(idName: string): void {
    document.getElementById(idName).scrollIntoView({behavior: 'smooth'});
  }
}
