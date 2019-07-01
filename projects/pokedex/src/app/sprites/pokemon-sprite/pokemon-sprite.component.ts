import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { SpriteUrls, PokemonDetails } from '../../_models/pokemon';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-sprite',
  templateUrl: './pokemon-sprite.component.html',
  styleUrls: ['./pokemon-sprite.component.css']
})
export class PokemonSpritesComponent implements OnInit, OnChanges, OnDestroy {

  @Input() pokemonUrl: string;
  @Input() pokemonName: string;

  pokemonSprites: SpriteUrls;
  pokemonId: number;
  pokemonType = [];
  subscription;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() { }

  ngOnChanges() {
    this.subscription = this.pokemonService.getPokemonInfo(this.pokemonName).pipe(
      switchMap((data => {
        this.pokemonSprites = data.sprites;
        this.pokemonId = data.id;
        return this.pokemonService.getPokemonDescription(this.pokemonUrl);
      })
      )).subscribe(data => {
        this.pokemonType = data.types;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
