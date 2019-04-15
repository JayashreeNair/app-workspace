// import {ComponentList} from './pages/component-list';
// import {GuideList} from './pages/guide-list';
import {Routes} from '@angular/router';
import {OverviewComponent} from './examples/overview-component';
import {ButtonExampleComponent} from './examples/button-example-component';

export const DOC_ROUTES: Routes = [
    {path: '', component: OverviewComponent, pathMatch: 'full', data: {}},
    {path: 'Button', component: ButtonExampleComponent},
    {path: '**', redirectTo: ''},
];
