import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Items } from '../../_models/items';
import { PokemonService } from '../../pokemon.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  @Input() itemUrl;
  pokeItems = [];
  page = 48;
  subscription: Subscription;
  subscription2: Subscription;
  p:string;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription2 =this.route.queryParamMap.pipe(
      map(params => params.get('page'))
    ).subscribe((page => this.p = page));
    this.subscription = this.route.params.pipe(
      switchMap(() => {
        return this.pokemonService.getPokeItems();
      })
    ).subscribe(
      (data: Items) => {
        this.pokeItems = data.results;
      });


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  loadMore() {
    this.page += 48;
  }

  pageChange(newPage: number) {
		this.router.navigate(['/item-list'], { queryParams: { page: newPage } });
	}
}


