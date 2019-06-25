import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
subs;
pokemonTypes=[];
pokemons=[];
private searchTerms = new Subject<string>();
  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

  this.subs= this.pokemonService.getPokemonTypes().pipe(
    switchMap((data)=>{
      this.pokemonTypes = data.results;
      return this.pokemonService.getPokemon();
    })
  ).subscribe(data=>{
    this.pokemons = data.results;
  })
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
