import {NgModule} from '@angular/core';
import {ButtonExampleComponent} from './button-example-component';
import {OverviewComponent} from './overview-component';
import {ComponentsLibraryModule} from 'abz-componentS-library';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxExampleComponent} from './checkbox-example-component';

@NgModule({
    imports: [ComponentsLibraryModule, BrowserAnimationsModule],
    exports: [ButtonExampleComponent, OverviewComponent, CheckboxExampleComponent],
    declarations: [ButtonExampleComponent, OverviewComponent, CheckboxExampleComponent],
})

export class ExampleModule {
}
