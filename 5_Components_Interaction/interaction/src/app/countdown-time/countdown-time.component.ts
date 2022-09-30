import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() time = 11;

  private _interval: any;

  startCountDown() {
    this._interval=setInterval(() => {
      this.time = this.time - 1;
      if (this.time == 0) {
        clearInterval(this._interval);
      }
    }, 1000);
  }

  stopCountDown()
  {
    clearInterval(this._interval)
  }

  resetCountDown()
  {
    clearInterval(this._interval)
    return this.time = 11;
  }
}

