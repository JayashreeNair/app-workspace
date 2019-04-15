import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonDocumentPageComponent} from './button-document-page-component';
import {CheckboxDocumentPageComponent} from './checkbox-document-page-component';
import {ExampleViewerModule} from '../shared/example-viewer/example-viewer.component';
import {ExampleModule} from '../examples/example-module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [BrowserAnimationsModule, ExampleViewerModule, ExampleModule, HttpClientModule],
    exports: [ButtonDocumentPageComponent, CheckboxDocumentPageComponent],
    declarations: [ButtonDocumentPageComponent, CheckboxDocumentPageComponent],
})

export class PagesModule {
}
