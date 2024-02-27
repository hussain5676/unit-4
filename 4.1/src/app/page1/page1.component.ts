import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component {
  openPopup() {
    window.open(
      'http://localhost:4200/page2',
      '_blank',
      'width=500,height=500'
    );
  }
}
