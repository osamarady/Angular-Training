import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cols = false;
  cars = ['A', 'B', 'C', 'D'];
  green = 'green';
  orange = '#f99';
  public colory = {
    'green' : this.cols
  };

  constructor() { }

  ngOnInit() {
  }
  sayHello() {
    return 'hi';
  }
  sayHi() {
    this.orange = 'red';
  }

}
