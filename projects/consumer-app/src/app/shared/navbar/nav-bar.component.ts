import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';
// import {ThemePickerModule} from '../theme-picker/theme-picker';
// import {VersionPickerModule} from '../version-picker';
import {SECTIONS} from '../documentation-items/documentation-items';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    // ThemePickerModule,
    // VersionPickerModule,
    CommonModule
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarModule {}
