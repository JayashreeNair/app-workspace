import {Component, Input, OnInit} from '@angular/core';

/**
 * {@link https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts}
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

  @Input()
  name = 'default';

  constructor() { }

  ngOnInit() {
  }

}
