import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pokemon } from '../_models/pokemon';

@Component({
  selector: 'app-pokemon-list-by-type',
  templateUrl: './pokemon-list-by-type.component.html',
  styleUrls: ['./pokemon-list-by-type.component.css']
})
export class PokemonListByTypeComponent implements OnInit {
  pokemons = {};
  pokemonType;
  errorMsg;
  subscription;
  page = 48;
  total:number;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.pipe(
      switchMap((params) => {
        return this.pokemonService.getPokemonByType(params.type);
      })
    ).subscribe((data:Pokemon) => this.pokemons = data,
      error => this.router.navigate(['**']));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  loadMore() {
    console.log(this.total);
    this.page += 48;
  }
  onSelect(name) {
    this.router.navigate(['/pokemon', name]);
  }

  getPokemonId(url) {
    const id = url.split('/');
    return id[6];
  }

}

