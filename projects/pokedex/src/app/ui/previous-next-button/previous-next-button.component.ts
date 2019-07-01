import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Subscription } from 'rxjs';
import { Pokemon } from '../../_models/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-next-button',
  templateUrl: './previous-next-button.component.html',
  styleUrls: ['./previous-next-button.component.css']
})
export class PreviousNextButtonComponent implements OnInit, OnChanges {
  @Input() pokemonName;
  @Input() pokemonId;
  pokemons = [];
  previousPokemon: string;
  nextPokemon: string;
  subscription: Subscription;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.subscription = this.pokemonService.getPokemon().subscribe(
      (data: Pokemon) => {
        this.pokemons = data.results;

        for (let i = 0; i < this.pokemons.length; i++) {
          if (this.pokemonName === this.pokemons[i].name) {
            if (i === 0) {
              this.previousPokemon = this.pokemons[this.pokemons.length - 1].name;
            } else {
              this.previousPokemon = this.pokemons[i - 1].name;
            }
            if (i === this.pokemons.length - 1) {
              this.nextPokemon = this.pokemons[0].name;
            } else {
              this.nextPokemon = this.pokemons[i + 1].name;
            }
          }
        }
      });
  }

  goNext() {

    let nextPokemon;
    if (this.pokemonId === 807) {
      nextPokemon = this.pokemonId + 9194;
    } else if (this.pokemonId === 10157) {
      this.router.navigate(['/pokemon', 1]);
      return;
    } else {
      nextPokemon = this.pokemonId + 1;
    }
    this.router.navigate(['/pokemon', nextPokemon]);


  }

  goPrevious() {
    let nextPokemon;
    if (this.pokemonId === 10001) {
      nextPokemon = this.pokemonId - 9194;
    } else if (this.pokemonId === 1) {
      this.router.navigate(['/pokemon', 10157]);
      return;
    } else {
      nextPokemon = this.pokemonId - 1;
    }
    this.router.navigate(['/pokemon', nextPokemon]);
  }

}
