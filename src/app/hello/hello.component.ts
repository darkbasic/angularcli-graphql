import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.html']
})
export class HelloComponent implements AfterViewInit {
  title = 'app';

  @ViewChild(Content) content: Content;

  ngAfterViewInit() {
    if (this.content) {
      console.log('ion-content found, Ionic works correctly');
    }
  }
}
