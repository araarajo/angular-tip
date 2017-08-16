import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent {
  countComplete: boolean;
  countDown: number;
  count$: Observable<number>
  message: string;

  constructor() {
    this.countDown = 5;
    this.message = 'Happy Birthday!';
    this.countComplete = false;

    this.count$ = interval(1000)
      .map(i => this.countDown - i)
      .takeWhile(i => i > 0)
      .finally(() => this.countComplete = true);
  }
}
