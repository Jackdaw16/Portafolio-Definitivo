import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';


@Component({
  selector: 'app-platforms-skills',
  templateUrl: './platforms-skills.component.html',
})
export class PlatformsSkillsComponent implements OnInit {

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
