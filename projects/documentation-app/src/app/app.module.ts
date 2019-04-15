import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavBarModule} from './shared/navbar';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent, HomepageModule} from './pages/homepage';
import {ExampleViewerComponent, ExampleViewerModule} from './pages/example-viewer/example-viewer-component';

export const DOC_ROUTES: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full', data: {}},
  {
    path: 'components', component: ExampleViewerComponent,
  //   children: [{path: '', component: ListComponentsOverviewComponent, outlet: 'details'},
  //     {path: ':id', component: ComponentsDocumentComponent, outlet: 'details'}]
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    RouterModule.forRoot(DOC_ROUTES),
    HomepageModule,
    ExampleViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



