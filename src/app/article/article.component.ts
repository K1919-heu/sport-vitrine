import { Component, OnInit } from '@angular/core';
import {Article} from '../model/article';
import {ArticleService} from '../shared/services/article.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService,
              private confirmService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this.articleService.getAll().subscribe(data => {
      this.articles = data;
    }, ex => console.log(ex));
  }

  receiveDelete(event: any): void {
    this.confirmService.confirm({
      message: 'Vous etes sur de supprimer?',
      accept: () => {
      this.articleService.delete(event).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Opération effectuée'});
        this.getAll();
      }, ex => console.log(ex));
      }
    });
  }
}
