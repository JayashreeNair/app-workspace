import { Component } from '@angular/core';
import {EXAMPLES} from './examples/EXAMPLES';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-workspace';
  examples = EXAMPLES;
}
