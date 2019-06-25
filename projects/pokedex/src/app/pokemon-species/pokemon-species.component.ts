import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SpriteUrls, PokemonDetails, PokemonTypes, PokemonSpecies } from '../_models/pokemon';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';



@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.css']
})
export class PokemonSpeciesComponent implements OnInit {
  private pokemonName:number;
  pokemonSprite: SpriteUrls;
  pokemonInfo: PokemonDetails;
  pokemonDetails: PokemonTypes[];
  subscription;
  pokemonId: number;
  pokemonSpecieDetails;
  pokemonDescription: string;
  public errorMsg;

  constructor(private location:Location,private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {

    this.subscription = this.route.params.pipe(
      switchMap((params) => {
        this.pokemonName = params.name;
        return this.pokemonService.getPokemonInfo(this.pokemonName).pipe(
          switchMap((data: PokemonDetails) => {
            this.pokemonSprite = data.sprites;
            this.pokemonInfo = data;
            this.pokemonDetails = data.types;
            this.pokemonId = data.id
            return this.pokemonService.getPokemonDesc(data.id);
          })
        )
      })
    ).subscribe((data:PokemonSpecies) => {

      this.pokemonSpecieDetails = data;

      for (let i of data.flavor_text_entries) {
        if (i.language.name == "en") {
          this.pokemonDescription = i.flavor_text;
          break;
        }
      }
    },
      error => this.errorMsg = error)


  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  onSelect(type) {
    this.router.navigate(['/pokemon-list/pokemon/', type]);
  }

  goNext(){
    var nextPokemon = this.pokemonId + 1;
    this.router.navigate(['/pokemon/', nextPokemon]);

  }

  goPrevious(){
    this.location.back();
  }
}
