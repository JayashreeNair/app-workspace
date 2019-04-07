import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ComponentsLibraryModule} from 'abz-components-library';

import {AppComponent} from './app.component';
import {NavBarModule} from './shared/navbar';
import {RouterModule} from '@angular/router';
import {DOC_ROUTES} from './routes';
import {HomepageModule} from './pages/homepage';
import {ComponentListModule} from './pages/component-list/list-components.component';
import {StackblitzButtonModule} from './shared/stackblitz';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ComponentsLibraryModule,
        NavBarModule,
        HomepageModule,
        ComponentListModule,
        StackblitzButtonModule,
        HttpClientModule,
        RouterModule.forRoot(DOC_ROUTES),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
