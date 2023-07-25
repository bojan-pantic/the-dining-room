import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  cuisines = [
    'All',
    'german',
    'chinese',
    'american',
    'indian',
    'pizza',
    'vegeterian',
  ];

  constructor() {}

  ngOnInit(): void {}
}
