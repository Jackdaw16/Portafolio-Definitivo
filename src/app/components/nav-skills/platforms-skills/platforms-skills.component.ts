import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';


@Component({
  selector: 'app-platforms-skills',
  templateUrl: './platforms-skills.component.html',
})
export class PlatformsSkillsComponent implements OnInit {

  defaultClass = 'block w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-16 xl:h-16 p-2';

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
