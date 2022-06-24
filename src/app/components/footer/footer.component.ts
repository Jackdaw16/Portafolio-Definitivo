import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();

  copyright = '@ ' + this.year + ' Juan Alejandro Demetrio Calderín. All Rights Reserved';

  constructor() { }

  ngOnInit(): void {
  }

}
