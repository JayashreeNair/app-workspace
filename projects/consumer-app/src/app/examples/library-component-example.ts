import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-components',
  templateUrl: './library-component-example.html',
  styleUrls: []
})
export class ListComponentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}

@NgModule({
  imports: [],
  exports: [ListComponentsComponent],
  declarations: [ListComponentsComponent],
})
export class ComponentListModule {}
