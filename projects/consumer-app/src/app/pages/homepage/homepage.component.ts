import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.scss']
})
export class HomepageComponent implements OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  constructor() {}

  ngOnInit(): void {
  }
}

@NgModule({
  imports: [MatButtonModule, RouterModule],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
