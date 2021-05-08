import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../../model/article';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.scss']
})
export class ListeArticlesComponent implements OnInit {
  @Input() articles: Article [];
  @Output() sendDelete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  remove(id: any): void {
    this.sendDelete.emit(id);
  }
}
