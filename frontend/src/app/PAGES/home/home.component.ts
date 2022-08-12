import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  introTime = true;

  constructor() { }

  ngOnInit(): void {
    this.introTimeout();
  }

  introTimeout() {
    setTimeout(() => {
      this.introTime = false
    }, 8500)
  }

}
