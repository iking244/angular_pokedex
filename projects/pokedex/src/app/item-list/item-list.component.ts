import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Items, ItemDetails, Sprites } from '../_models/items';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() itemUrl;
  pokeItems = [];
  page = 48;


  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(() => {
        return this.pokemonService.getPokeItems();
      })
    ).subscribe(
      (data: Items) => {
        this.pokeItems = data.results;
      });


  }
  loadMore() {
    this.page += 48;
  }
}


