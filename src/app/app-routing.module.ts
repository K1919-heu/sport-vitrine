import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {AddEditArticleComponent} from './article/add-edit-article/add-edit-article.component';
import {HomeComponent} from './home/home.component';
import {PanierComponent} from './panier/panier.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'articles', component: ArticleComponent},
  {path: 'articles/new', component: AddEditArticleComponent},
  {path: 'articles/edit/:id', component: AddEditArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
