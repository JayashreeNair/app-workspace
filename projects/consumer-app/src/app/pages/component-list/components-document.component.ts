import {Component, OnInit} from '@angular/core';
import {componentlist} from './componentslist';

@Component({
    selector: 'app-component-document',
    templateUrl: './components-document.html',
    styleUrls: []
})
export class ComponentsDocumentComponent implements OnInit {
    all = componentlist;

    constructor() {
    }

    ngOnInit(): void {
        this.all = componentlist;
    }
}
