import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from '../../model/article';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  article = new Article();
  @Output() sendFilter = new EventEmitter<Article>();
  constructor() { }

  ngOnInit(): void {
  }

  filtrer(): void {
    this.sendFilter.emit(this.article);
  }
}
