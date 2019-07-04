import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NickAngel';

  ngOnInit() {
    setTimeout(this.setScrolling, 7000);
  }

  setScrolling() {
    const elem: HTMLElement = document.getElementById('root');
    elem.setAttribute('style', 'overflow-y: scroll;');
  }
}
