import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

  constructor( private viewportScroller: ViewportScroller) { }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
  }

}
