import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-design-skills',
  templateUrl: './design-skills.component.html',
})
export class DesignSkillsComponent implements OnInit {

  defaultClass = 'block w-14 h-14 md:w-20 md:h-20 xl:w-16 xl:h-16 p-2';

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
