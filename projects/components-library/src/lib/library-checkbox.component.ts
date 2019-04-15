import {Component, Input, OnInit} from '@angular/core';

/**
 * Examples:  <example-url>https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts</example-url>
 */

@Component({
  selector: 'lib-checkbox',
  templateUrl : './library-checkbox.html',
  styles: []
})
export class LibraryCheckboxComponent implements OnInit {

  @Input()
  name = 'default';

  constructor() { }

  ngOnInit() {
  }

}
