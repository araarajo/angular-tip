import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  @Output() onClickCountDown = new EventEmitter;
  @Output() onClickForm = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
  }

}
