import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-skills',
  templateUrl: './nav-skills.component.html',
})
export class NavSkillsComponent implements OnInit {
  typeSkill = 'lenguage';

  /* Class */
  /*1366 x 768*/
  notActive = 'bg-secondary text-primary font-quick hover:bg-primary hover:text-secondary text-xs p-1 md:text-base md:p-2 lg:text-xl lg:px-3 lg:py-2.5 xl:text-sm xl:p-1.5';
  active = 'bg-primary text-secondary font-quick text-xs p-1 md:text-base md:p-2 lg:text-xl lg:px-3 lg:py-2.5 xl:text-sm xl:p-1.5';
  notActiveRoundedRight = 'bg-secondary text-primary font-quick hover:bg-primary hover:text-secondary text-xs p-1 md:text-base md:p-2 lg:text-xl lg:px-3 lg:py-2.5 xl:text-sm xl:p-1.5 rounded-tr-full rounded-br-full';
  activeRoundedRight = 'bg-primary text-secondary font-quick text-xs p-1 md:text-base md:p-2 lg:text-xl lg:px-3 lg:py-2.5 xl:text-sm xl:p-1.5 rounded-tr-full rounded-br-full';
  notActiveRoundedLeft = 'bg-secondary text-primary font-quick hover:bg-primary hover:text-secondary text-xs p-1 md:text-base md:p-2 lg:text-xl lg:px-3 lg:py-2.5 xl:p-1.5 xl:text-sm rounded-tl-full rounded-bl-full';
  activeRoundedLeft = 'bg-primary text-secondary font-quick hover:bg-primary hover:text-secondary text-xs p-1 md:text-base md:p-2 lg:text-xl lg:px-3 lg:py-2.5 xl:p-1.5 xl:text-sm rounded-tl-full rounded-bl-full';

  constructor() { }

  ngOnInit(): void {
  }

}
