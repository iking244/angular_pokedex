import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonDetails, Pokemon } from '../../_models/pokemon';
import { PokemonService } from '../../pokemon.service';
import { map } from 'rxjs/operators';
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
  subscription2: Subscription;
  page = 48;
  p: string;

  constructor(private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription2 =this.route.queryParamMap.pipe(
      map(params => params.get('page'))
    ).subscribe((page => this.p = page));


    this.subscription = this.pokemonService.getPokemon().subscribe(
      (data: Pokemon) => {
        this.pokemons = data.results;
      }
    );
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

  pageChange(newPage: number) {
		this.router.navigate(['/pokemon-list'], { queryParams: { page: newPage } });
	}
}


