import {Component, NgModule, OnInit} from '@angular/core';
import {MatCardModule, MatSidenavModule, MatTabsModule} from '@angular/material';
import {componentlist} from './componentslist';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ComponentsDocumentComponent} from './components-document.component';
import {StackblitzButtonModule} from '../../shared/stackblitz';

@Component({
    selector: 'app-list-components',
    templateUrl: './list-components.html',
    styleUrls: []
})
export class ListComponentsComponent implements OnInit {
    all = componentlist;

    constructor() {
    }

    ngOnInit(): void {
        this.all = componentlist;
    }
}

@NgModule({
    imports: [MatTabsModule, MatSidenavModule, BrowserModule, BrowserAnimationsModule, RouterModule, StackblitzButtonModule],
    exports: [ListComponentsComponent],
    declarations: [ListComponentsComponent, ComponentsDocumentComponent],
})
export class ComponentListModule {
}
