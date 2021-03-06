import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonListComponent } from './pokemonList/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonListByTypeComponent } from './pokemonList/pokemon-list-by-type/pokemon-list-by-type.component';
import { ItemListComponent } from './pokemonList/item-list/item-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list/1', pathMatch: 'full' },
  { path: 'pokemon-list/:page', component: PokemonListComponent },
  { path: 'pokemon/:name', component: PokemonSpeciesComponent },
  { path: 'pokemon-list/pokemon/:type/:page', component: PokemonListByTypeComponent },
  { path: 'item-list/:page', component: ItemListComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PokemonListComponent, PokemonSpeciesComponent, PokemonListByTypeComponent
  , PageNotFoundComponent, ItemListComponent]
