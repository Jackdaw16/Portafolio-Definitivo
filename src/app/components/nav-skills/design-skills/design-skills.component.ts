import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-design-skills',
  templateUrl: './design-skills.component.html',
})
export class DesignSkillsComponent implements OnInit {

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
