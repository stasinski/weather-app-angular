import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unknown-location',
  templateUrl: './unknown-location.component.html',
  styleUrls: ['./unknown-location.component.scss'],
})
export class UnknownLocationComponent implements OnInit {
  constructor() {
    console.log('test');
  }

  ngOnInit(): void {}
}
