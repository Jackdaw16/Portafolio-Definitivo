import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-web-skills',
  templateUrl: './web-skills.component.html',
})
export class WebSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '#border',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 800,
      delay: 200,
      easing: 'easeInOutQuad'
    });
  }

}
