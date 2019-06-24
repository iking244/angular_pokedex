import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon/:name', component: PokemonSpeciesComponent},
  { path: 'pokemon-list/pokemon/:type' , component: PokemonListByTypeComponent },
  { path: 'item-list', component: ItemListComponent},
  { path: "**", component: PageNotFoundComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PokemonListComponent, PokemonSpeciesComponent,PokemonListByTypeComponent
                                  ,PageNotFoundComponent,ItemListComponent]
