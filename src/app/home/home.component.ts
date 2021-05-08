import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {ArticleService} from '../shared/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
getAll(): void {
  this.articleService.getAll().subscribe(res => this.articles = res,
    ex => console.log(ex));
}
  receiveFilter(article: Article): void {

    let param = '?';
    if (article.nom !== undefined) {
      param += 'nom_like=' + article.nom + '&';
    }
    if (article.marque !== undefined) {
      param += 'marque_like=' + article.marque + '&';
    }
    if (article.prix !== undefined && article.prix !== null) {
      param += 'prix_lte=' + article.prix;
    }
    this.articleService.filtrer(param).subscribe(res => this.articles = res,
      ex => console.log(ex));
  }
}
