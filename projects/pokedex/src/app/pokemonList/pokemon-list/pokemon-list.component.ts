import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonDetails, Pokemon } from '../../_models/pokemon';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons = [];
  pokemonTypes = [];
  pokemonId: PokemonDetails;
  subscription;
  page = 48;
  p = 1;

  constructor(private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.subscription = this.pokemonService.getPokemon().subscribe(
      (data: Pokemon) => {
        this.pokemons = data.results;
      }
    );
  }

  ngOnChanges(){
  
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

 
  onSelect(id) {
    this.router.navigate(['/pokemon', id]);
  }

  loadMore() {
    this.page += 48;
  }

  getPokemonId(url) {
    const id = url.split('/');
    return id[6];
  }
}


