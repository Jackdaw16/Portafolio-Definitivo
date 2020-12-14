import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
})
export class ExternalLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      target: '.example',
      scale: 2,
      duration: 2000,
      direction: 'alternate'
    });

  }
  zoomEffect(): void {
    anime({
      target: '#example',
      translateX: 20,
      duration: 200,
      easing: 'easeInOutQuad',
    });
  }

}
