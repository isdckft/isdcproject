import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { WebPage} from '../../model/web-page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' ,
  })
};
@Injectable({
  providedIn: 'root'
})
export class WebPageService {

  private serverurl = environment.SERVER_URL+'/rest/webpages/';
  private serverurlId = environment.SERVER_URL+'/rest/webpage/';
  private serverurlName = environment.SERVER_URL+'/rest/webpage-name/';
  private serverurlPost = environment.SERVER_URL+'/rest/webpage-post/';
  private serverurlPut = environment.SERVER_URL+'/rest/webpage-put/';

  constructor(private http: HttpClient) {
  }

  // get all web pages
  getWebPages(): Observable<WebPage[]>  {

    return this.http.get<WebPage[]>(this.serverurl).pipe(
      catchError(this.handleError<WebPage[]>('getWebPages', []))
    );

  }

  // get a web page by ID
  getWebPageById (id: number): Observable<WebPage> {
    return this.http.get<WebPage>(this.serverurlId + id + '/').pipe(
      catchError(this.handleError<WebPage>('getWebPageById id=${id}'))
    );
  }

  // get a web page by name
  getWebPageByName (name: string): Observable<WebPage> {
    return this.http.get<WebPage>(this.serverurlName + name + '/').pipe(
      catchError(this.handleError<WebPage>('getWebPageByName name=${name}'))
    );
  }

  // create a new web page
  newWebPage (webPage: WebPage ): Observable<WebPage> {
    return this.http.post<WebPage>(this.serverurlPost, webPage, httpOptions).pipe(
      catchError(this.handleError<WebPage>('newWebPage'))
    );
  }

  // delete a web page
  deleteWebPage (webPage: WebPage): Observable<WebPage>{
    return this.http.delete<WebPage>(this.serverurlPut + webPage.id + '/', httpOptions).pipe(
      catchError(this.handleError<WebPage>('deleteWebPage'))
    );
  }

  // update a webpage
  updateWebPage (modWebPage: WebPage): Observable<WebPage> {
    return this.http.put<WebPage>(this.serverurlPut + modWebPage.id + '/', modWebPage, httpOptions).pipe(
      catchError(this.handleError<WebPage>('updateWebPage'))
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

