import { Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';
import { PageType} from '../../model/page-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class PageTypeService {

  private serverurl = environment.SERVER_URL+'/rest/pagetypes/';
  private serverurlId = environment.SERVER_URL+'/rest/pagetype/';
  private serverurlPost = environment.SERVER_URL+'/rest/pagetype-post/';
  private serverurlPut = environment.SERVER_URL+'/rest/pagetype-put/';

  constructor(private http: HttpClient) { }

  getPageTypes(): Observable<PageType[]>{
    return this.http.get<PageType[]>(this.serverurl).pipe(
      catchError(this.handleError<PageType[]>('getPagetypes', []))
    );
  }
  getPageTypeById (id: number): Observable<PageType> {
    return this.http.get<PageType>(this.serverurlId + id + '/').pipe(
      catchError(this.handleError<PageType>('getPagetypesid=${id}'))
    );
  }
  newPageType (newPageType :PageType ): Observable<PageType> {
    return this.http.post<PageType>(this.serverurlPost, newPageType, httpOptions).pipe(
      catchError(this.handleError<PageType>('getPagetypes'))
    );
  }

  deletePageType (pageType :PageType): Observable<PageType>{
    return this.http.delete<PageType>(this.serverurlPut + pageType.id + '/', httpOptions).pipe(
      catchError(this.handleError<PageType>('getPagetypes'))
    );
  }
  updatePageType (modPageType: PageType): Observable<PageType> {
    return this.http.put<PageType>(this.serverurlPut + modPageType.id + '/', modPageType, httpOptions).pipe(
      catchError(this.handleError<PageType>('getPagetypes'))
    );
  }

      /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
   private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      if (error.status === 404){
        console.log('Not found'+ operation);


      } else if (error.status === 400) {
        console.log('Bad Request '+ operation);
        console.error(error);
      } else if (error.status === 401) {
        console.log('Not Authenticated '+ operation);
      } else {
        console.log('Other error '+ operation);
        console.error(error);
      }

      return of(result as T);
    };
  }
}
