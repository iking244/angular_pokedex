import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonDetails, Pokemon } from '../_models/pokemon';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons = {};
  pokemonId: PokemonDetails;
  subscription;
  page=48;
  
  constructor(private pokemonService: PokemonService, private router: Router,private route:ActivatedRoute) { }
  ngOnInit() {
  this.subscription = 
  this.route.params.pipe(
    switchMap(()=>{
      return this.pokemonService.getPokemon()
    })).subscribe(
      data => this.pokemons = data
      );
    }
  

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onSelect(name) {
    this.router.navigate(['/pokemon-list', name]);
  }

  loadMore(){
    this.page += 48 ;
  }
}


