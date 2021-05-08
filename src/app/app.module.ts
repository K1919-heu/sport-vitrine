import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AddEditArticleComponent } from './article/add-edit-article/add-edit-article.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {Toast, ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListeArticlesComponent } from './article/liste-articles/liste-articles.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { CardArticleComponent } from './home/card-article/card-article.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AddEditArticleComponent,
    ListeArticlesComponent,
    HomeComponent,
    FilterComponent,
    CardArticleComponent,
    PanierComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    TableModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
