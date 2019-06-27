import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { PokemonDetails, PokemonSpecies, Pokemon, PokemonTypes } from './_models/pokemon';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Items, ItemDetails } from './_models/items';
import { Chain } from './_evolution/evolution';
import { Abilities } from './_models/abilities';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
private url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=964';
private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
private pokemonSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
private pokemonTypes= 'https://pokeapi.co/api/v2/type/';
private itemsUrl = "https://pokeapi.co/api/v2/item?offset=0&limit=964";
private abilityUrl = "https://pokeapi.co/api/v2/ability/"

  constructor(private http: HttpClient, private router: Router) { }

  getPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url);
  }
  getPokemonInfo(name): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(this.pokemonUrl + name).pipe(
      catchError(this.errorHandler));
  }

  getPokemonDescription(url): Observable<PokemonSpecies>{
    return this.http.get<PokemonSpecies>(url).pipe(
      catchError(this.errorHandler));
  }

  getPokemonByType(type):Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokemonTypes + type).pipe(
      catchError(this.errorHandler));
  }

  getEvolutionChain(url):Observable<Chain>{
    return this.http.get<Chain>(url);
  }

  getPokeItems():Observable<Items>{
    return this.http.get<Items>(this.itemsUrl).pipe(
      catchError(this.errorHandler));
  }

  getItemDescription(url):Observable<ItemDetails>{
    return this.http.get<ItemDetails>(url).pipe(
      catchError(this.errorHandler));
  }

  getPokemonTypes():Observable<PokemonTypes>{
    return this.http.get<PokemonTypes>("https://pokeapi.co/api/v2/type/").pipe(
      catchError(this.errorHandler));
  }

  getAbilityDetails(url): Observable<Abilities> {
    return this.http.get<Abilities>(url).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error : HttpErrorResponse){
    return observableThrowError(error.message || 'server error ');
  }

}
