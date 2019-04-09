import {Component, Input, OnInit} from '@angular/core';

/**
 * {@link https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts}
 */

@Component({
  selector: 'lib-button',
  templateUrl : './library-button.html',
  styles: []
})
export class LibraryButtonComponent implements OnInit {

  @Input()
  name = 'default';

  constructor() { }

  ngOnInit() {
  }

}
