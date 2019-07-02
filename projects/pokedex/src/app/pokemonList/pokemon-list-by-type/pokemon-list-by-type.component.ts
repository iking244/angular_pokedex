import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pokemon } from '../../_models/pokemon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list-by-type',
  templateUrl: './pokemon-list-by-type.component.html',
  styleUrls: ['./pokemon-list-by-type.component.css']
})
export class PokemonListByTypeComponent implements OnInit, OnDestroy {
  pokemons = {};
  pokemonType;
  errorMsg;
  subscription: Subscription;
  pagination: any;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
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
          this.pokemonType = params.type;
          return this.pokemonService.getPokemonByType(params.type);
        })
      )
      .subscribe((data: Pokemon) => (this.pokemons = data), error => this.router.navigate(['**']));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelect(name) {
    this.router.navigate(['/pokemon', name]);
  }
  getPokemonId(url) {
    const id = url.split('/');
    return id[6];
  }

  pageChange(newPage: number) {
    this.router.navigate(['/pokemon-list/pokemon/', this.pokemonType, (this.pagination.currentPage = newPage)]);
  }
}
