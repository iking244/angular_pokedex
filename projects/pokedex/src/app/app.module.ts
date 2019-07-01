import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { PokemonListByTypeComponent } from './pokemonList/pokemon-list-by-type/pokemon-list-by-type.component';
import { EvolutionChainComponent } from './evolution-chain/evolution-chain.component';
import { HeaderComponent } from './ui/header/header.component';
import { ItemListComponent } from './pokemonList/item-list/item-list.component';
import { ItemSpriteComponent } from './sprites/item-sprite/item-sprite.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
import { AbilityDetailComponent } from './ability-detail/ability-detail.component';
import { PokemonSpritesComponent } from './sprites/pokemon-sprite/pokemon-sprite.component';
import { PreviousNextButtonComponent } from './ui/previous-next-button/previous-next-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSpritesComponent,
    routingComponents,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    PokemonListByTypeComponent,
    EvolutionChainComponent,
    HeaderComponent,
    ItemListComponent,
    ItemSpriteComponent,
    ProgressBarComponent,
    AbilityDetailComponent,
    PreviousNextButtonComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
