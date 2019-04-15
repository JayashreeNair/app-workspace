// import {ComponentList} from './pages/component-list';
// import {GuideList} from './pages/guide-list';
import {Routes} from '@angular/router';
import {OverviewComponent} from './examples/overview-component';
import {ButtonDocumentPageComponent} from './pages/button-document-page-component';
import {CheckboxDocumentPageComponent} from './pages/checkbox-document-page-component';

export const DOC_ROUTES: Routes = [
    {path: '', component: OverviewComponent, pathMatch: 'full', data: {}},
    {path: 'Button', component: ButtonDocumentPageComponent},
    {path: 'CheckBox', component: CheckboxDocumentPageComponent},
    {path: '**', redirectTo: ''},
];
