import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';
import { Abilities } from '../_models/abilities';

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.component.html',
  styleUrls: ['./ability-detail.component.css']
})
export class AbilityDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() abilityUrl;

  abilityEffect = [];
  subscription: Subscription;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.subscription = this.pokemonService.getAbilityDetails(this.abilityUrl).subscribe((data: Abilities) => {
      this.abilityEffect = data.effect_entries;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
