import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { ItemDetails, Sprites } from '../../_models/items';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-sprite',
  templateUrl: './item-sprite.component.html',
  styleUrls: ['./item-sprite.component.css']
})
export class ItemSpriteComponent implements OnInit, OnChanges, OnDestroy {
  @Input() itemUrl;
  subscription: Subscription;
  itemDetails: ItemDetails;
  itemSprites: Sprites;
  itemDescription: string;
  itemEffect: string;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.subscription = this.pokemonService.getItemDescription(this.itemUrl).subscribe((data: ItemDetails) => {
      this.itemDetails = data;
      this.itemSprites = data.sprites;

      for (const text of this.itemDetails.flavor_text_entries) {
        if (text.language.name === 'en') {
          this.itemDescription = text.text;
          break;
        }
      }
      for (const text of this.itemDetails.effect_entries) {
        this.itemEffect = text.short_effect;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
