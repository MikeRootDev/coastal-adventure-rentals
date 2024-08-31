import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HeroComponent } from './hero/hero.component';
import { HowToRentComponent } from './how-to-rent/how-to-rent.component';

export const routes: Routes = [
    {
        'path': '',
        'component': HeroComponent,
        'title': 'Hero'
    },
    {
        'path': 'howtorent',
        'component': HowToRentComponent,
        'title': 'How to Rent'
    },
    {
        'path': 'products',
        'component': CatalogComponent,
        'title': 'Products'
    }
];
