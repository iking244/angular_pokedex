import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { Chain } from '../_models/_evolution/evolution';

@Component({
  selector: 'app-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.css']
})
export class EvolutionChainComponent implements OnInit, OnChanges, OnDestroy {
  @Input() specieUrl: string;
  subscription;
  evolution_data: Chain;
  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {}

  ngOnChanges() {
    this.subscription = this.pokemonService.getEvolutionChain(this.specieUrl).subscribe((data: Chain) => {
      this.evolution_data = data.chain;
    });
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
}
