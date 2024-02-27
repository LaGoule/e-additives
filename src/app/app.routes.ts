import { Routes } from '@angular/router';
import { SearchPageComponent } from './@components/search-page/search-page.component';
import { ListPageComponent } from './@components/list-page/list-page.component';
import { DetailPageComponent } from './@components/detail-page/detail-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full'},
    { path: 'search', loadComponent: ()=> SearchPageComponent },
    { path: 'list', loadComponent: ()=> ListPageComponent },
    { path: 'detail', loadComponent: ()=> DetailPageComponent },
    { path: '**', redirectTo: '' }
];
