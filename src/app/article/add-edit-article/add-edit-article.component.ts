import {Component, OnInit} from '@angular/core';
import {Article} from '../../model/article';
import {ArticleService} from '../../shared/services/article.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-add-edit-article',
  templateUrl: './add-edit-article.component.html',
  styleUrls: ['./add-edit-article.component.scss']
})
export class AddEditArticleComponent implements OnInit {
  article = new Article();
  idArticle: any;
  title = 'Ajout article';
  constructor(private articleService: ArticleService,
              private messageService: MessageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.idArticle = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.idArticle) {
      this.title = 'Modifier Article';
      this.articleService.getById(this.idArticle).subscribe(res => {
        this.article = res;
      }, ex => console.log(ex));
    }
  }

  add(): void {
    this.articleService.save(this.article).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Opération effectuée'});
      this.router.navigate(['/articles']);
    }, ex => {
      console.log(ex);
    });
  }

  public edit(): void {
    this.articleService.update(this.idArticle, this.article).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Opération effectuée'});
      this.router.navigate(['/articles']);
    }, ex => {
      console.log(ex);
    });
  }

  valider(): void {
    if (this.idArticle) {
      this.edit();
    } else {
      this.add();
    }
  }

}
