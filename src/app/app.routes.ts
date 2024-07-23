import { Routes } from '@angular/router';
import { PropertiesListComponent } from './Components/Lists/properties-list/properties-list.component';
import { PropertyCardsComponent } from './Components/Cards/property-cards/property-cards.component';

export const routes: Routes = [

    { path: 'property-cards', component: PropertyCardsComponent},
    { path: 'properties-list', component: PropertiesListComponent}
];
