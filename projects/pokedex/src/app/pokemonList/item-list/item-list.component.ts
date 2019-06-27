import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Items,} from '../../_models/items';
import { PokemonService } from '../../pokemon.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() itemUrl;
  pokeItems = [];
  page = 48;
  subscription;


  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.route.params.pipe(
      switchMap(() => {
        return this.pokemonService.getPokeItems();
      })
    ).subscribe(
      (data: Items) => {
        this.pokeItems = data.results;
      });


  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  loadMore() {
    this.page += 48;
  }
}

