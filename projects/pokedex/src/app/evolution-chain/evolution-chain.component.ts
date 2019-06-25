import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { Chain } from '../_evolution/evolution';

@Component({
  selector: 'app-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.css']
})
export class EvolutionChainComponent implements OnInit {
@Input() specieUrl: string;
subscription;
evolution_data: Chain;
  constructor(private pokemonService: PokemonService,private router:Router) { }

  ngOnInit() {
    this.subscription = this.pokemonService.getEvolutionChain(this.specieUrl).
    subscribe((data: Chain)=>{
    this.evolution_data= data.chain;
    console.log(data.chain);
    }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSelect(name){
    this.router.navigate(['/pokemon',name])
  }

  getPokemonId(url) {
    const id = url.split('/');
    return id[6];
  }

}
