import {Component, NgModule, OnInit} from '@angular/core';
import {MatSidenavModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
    selector: 'doc-homepage',
    templateUrl: './example-viewer-component.html',
    styleUrls: []
})
export class ExampleViewerComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}

@NgModule({
    imports: [MatTabsModule, MatSidenavModule, RouterModule, BrowserAnimationsModule],
    exports: [ExampleViewerComponent],
    declarations: [ExampleViewerComponent],
})
export class ExampleViewerModule {
}
