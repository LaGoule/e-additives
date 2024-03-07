import { Routes } from '@angular/router';
import { SearchPageComponent } from './@pages/search-page/search-page.component';
import { ListPageComponent } from './@pages/list-page/list-page.component';
import { DetailPageComponent } from './@pages/detail-page/detail-page.component';
import { preloadItemResolver } from './@resolvers/preload-item.resolver';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'search', 
        pathMatch: 'full'
    },
    { 
        path: 'search', 
        loadComponent: ()=> SearchPageComponent 
    },
    { 
        path: 'list',
        children: [
            { 
                path: '', 
                loadComponent: ()=> ListPageComponent 
            },
            { 
                path: ':id', 
                loadComponent: ()=> DetailPageComponent,
                resolve: { 
                    item: preloadItemResolver
                },
            }
        ]
    },
    { 
        path: 'detail', 
        loadComponent: ()=> DetailPageComponent 
    },
    { 
        path: '**', 
        redirectTo: '' 
    }
];
