import { Component, OnInit } from '@angular/core';

/**
 * ComponentsLibraryComponent description
 *
 * see {@link http://www.google.fr}
 * see {@link Second link}
 * see {@link http://www.google.uk Third link}
 * see [Last link]{@link http://www.google.jp}
 *
 */


@Component({
  selector: 'lib-components-library',
  template: `
    <p>
      components-library works!
    </p>
  `,
  styles: []
})
export class ComponentsLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
