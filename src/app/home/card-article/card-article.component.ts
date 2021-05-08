import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../model/article';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {
  @Input() article = new Article();

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  addToCart(article: Article): void {
    // stockage des données au niveau du navigateur pour ne pas perdre le panier lors du exit . /

    // @ts-ignore
    let carts: any[] = JSON.parse(localStorage.getItem('carts'));
    article.quantite = 1;
    if (carts !== null) {
      const exist =  carts.find(cart => cart.id === article.id);
      if (!exist) {
        carts.push(article);
        localStorage.setItem('carts', JSON.stringify(carts));
        this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Article ajouté au panier'}) ;
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: 'Article existe déjà au panier'}) ;
      }
    } else {
      carts = [];
      carts.push(this.article);
      localStorage.setItem('carts', JSON.stringify(carts));
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Article ajouté au panier'}) ;
    }
  }
}
