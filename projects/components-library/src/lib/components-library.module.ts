import { NgModule } from '@angular/core';
import { LibraryButtonComponent } from './library-button.component';
import {LibraryCheckboxComponent} from './library-checkbox.component';

@NgModule({
  imports: [
  ],
  declarations: [LibraryButtonComponent, LibraryCheckboxComponent],
  exports: [LibraryButtonComponent, LibraryCheckboxComponent]
})
export class ComponentsLibraryModule { }
