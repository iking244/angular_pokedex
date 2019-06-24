import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonSpritesComponent } from './pokemon-sprite/pokemon-sprite.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { EvolutionChainComponent } from './evolution-chain/evolution-chain.component';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemSpriteComponent } from './item-sprite/item-sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PokemonSpritesComponent,
    routingComponents,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    PokemonListByTypeComponent,
    EvolutionChainComponent,
    HeaderComponent,
    ItemListComponent,
    ItemSpriteComponent
  
    
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
