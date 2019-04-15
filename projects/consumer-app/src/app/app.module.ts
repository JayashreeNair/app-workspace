import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {DOC_ROUTES} from './routes';
import {MatSidenavModule, MatTabsModule} from '@angular/material';
import {PagesModule} from './pages/PagesModule';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MatSidenavModule,
        MatTabsModule,
        PagesModule,
        RouterModule.forRoot(DOC_ROUTES),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
