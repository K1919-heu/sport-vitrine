import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url = environment.apiUrl + '/articles';

  constructor(private httpClient: HttpClient) {
  }
  public getAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.url);
  }
  public filtrer(param: any): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.url + param);
  }
  public getById(id: any): Observable<Article> {
    return this.httpClient.get<Article>(this.url + '/' + id);
  }
  public save(article: Article): Observable<any> {
    return this.httpClient.post<any>(this.url, article);
  }

  public update(id: any, article: Article): Observable<any> {
    return this.httpClient.put<any>(this.url + '/' + id, article);
  }
  public delete(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }
}
