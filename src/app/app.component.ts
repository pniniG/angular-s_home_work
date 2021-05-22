import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  status = 0;
  constructor() { }
  show(p: number) {
    console.log("hh");

    this.status = p;
  }
}
