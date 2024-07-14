import { RouterModule, Routes } from '@angular/router';
import { PropertiesListComponent } from './Components/Lists/properties-list/properties-list.component';
import { PropertyCardsComponent } from './Components/Cards/property-cards/property-cards.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: 'properties_list', component: PropertiesListComponent}
    { path : 'property_cards', component: PropertyCardsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}