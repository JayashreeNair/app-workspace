import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavBarComponent, NavBarModule} from './nav-bar.component';
import {DocsAppTestingModule} from '../../testing/testing-module';


describe('NavBarComponent', () => {
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavBarModule, DocsAppTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    fixture.detectChanges();
  });

  // Note: Add tests as logic is added to navbar class.
});
