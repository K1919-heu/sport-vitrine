import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  articles: Article[];
  totalCommande = 0;

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.articles = JSON.parse(localStorage.getItem('carts'));
    this.totalCommande = this.articles.reduce((sum, current) => sum + current.prix, 0);
  }

  plusQuantite(art: Article): void {
    art.quantite += 1;
    this.totalCommande +=  art.prix  ;
  }

  minusQuantite(art: Article): void {
    if (art.quantite > 1) {
      art.quantite -= 1;
      this.totalCommande -=  art.prix  ;
    }

  }
}
