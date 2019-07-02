import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
  subscription: Subscription;

  pagination: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 48
    };
  }

  ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        switchMap(params => {
          this.pagination.currentPage = params.page;
          return this.pokemonService.getPokeItems();
        })
      )
      .subscribe((data: Items) => {
        this.pokeItems = data.results;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  pageChange(newPage: number) {
    this.router.navigate(['/item-list', (this.pagination.currentPage = newPage)]);
  }
}
