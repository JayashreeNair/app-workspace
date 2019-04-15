import {Component, NgModule, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material';

@Component({
    selector: 'app-example-viewer',
    templateUrl: './example-viewer.component.html',
    styleUrls: []
})
export class ExampleViewerComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}

@NgModule({
    imports: [MatTabsModule],
    exports: [ExampleViewerComponent],
    declarations: [ExampleViewerComponent],
})
export class ExampleViewerModule {
}
