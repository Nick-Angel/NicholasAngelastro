import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/bg.jpeg'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(this.setVisibility, 4700);
  }

  setVisibility() {
    const elem: HTMLElement = document.getElementById('nav');
    elem.setAttribute('style', 'visibility: visible');
  }


}
