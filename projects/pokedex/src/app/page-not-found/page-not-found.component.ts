import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-header></app-header>
    <h2>404 ERROR: PAGE NOT FOUND</h2>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
