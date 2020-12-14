import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
})
export class LinkComponent implements OnInit {
  @Input() nombre: string;
  @Input() type: string;
  @Input() router: string;

  constructor() { }

  ngOnInit(): void {
  }

}
