import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../_models/pokemon';
import { PokemonService } from '../../pokemon.service';
import { map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons = [];
  pokemonTypes = [];
  pokemonId;
  subscription: Subscription;
  pagination: any;

  constructor(private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 48
    };
  }

  ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        switchMap(params => {
          this.pagination.currentPage = params.page;
          return this.pokemonService.getPokemon();
        })
      )
      .subscribe((data: Pokemon) => {
        this.pokemons = data.results;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelect(id) {
    this.router.navigate(['/pokemon', id]);
  }

  getPokemonId(url) {
    const id = url.split('/');
    return id[6];
  }

  pageChange(newPage: number) {
    this.router.navigate(['/pokemon-list', (this.pagination.currentPage = newPage)]);
  }
}
