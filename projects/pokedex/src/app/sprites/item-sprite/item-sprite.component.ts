import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { ItemDetails, Sprites } from '../../_models/items';

@Component({
  selector: 'app-item-sprite',
  templateUrl: './item-sprite.component.html',
  styleUrls: ['./item-sprite.component.css']
})
export class ItemSpriteComponent implements OnInit, OnChanges {
  @Input() itemUrl;
  subscription1;
  itemDetails: ItemDetails;
  itemSprites: Sprites;
  itemDescription;
  itemEffect;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {

  }


  ngOnChanges() {

    this.pokemonService.getItemDescription(this.itemUrl)
      .subscribe((data: ItemDetails) => {
        this.itemDetails = data;
        this.itemSprites = data.sprites;

        for (const text of this.itemDetails.flavor_text_entries) {
          if (text.language.name == 'en') {
            this.itemDescription = text.text;
            break;
          }

        }
        for (const text of this.itemDetails.effect_entries) {
          this.itemEffect = text.short_effect;
        }
      });
  }

}

