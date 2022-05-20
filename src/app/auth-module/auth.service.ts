import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { User } from '../model/user';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' ,
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverurl = environment.SERVER_URL+'/api-token-auth/';
  private loggedIn = false;


  constructor(private http: HttpClient) {
    //localStorage.setItem('token', '');
  }


  isAuthenticated() {
    // should be check on the server whether the token is valid yet
    return this.loggedIn;
  }

  login(username: string, password: string): Observable <any> {

    const user: User = {username: username, password: password };

    return this.http.post<any>(this.serverurl, user, httpOptions);
    
    // .pipe(
    //   catchError(this.handleError<User>('login error'))
    // );
   
  }
  
  logout() {
    localStorage.setItem('token', '');
    this.loggedIn = false;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setLoggedIn(value: boolean){
    this.loggedIn = value;
  }

  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      if (error.status === 404){
        console.log('Not found'+ operation);


      } else if (error.status === 400) {
        console.log('Bad Request'+ operation);
        console.error(error);
        throwError(error);
      } else if (error.status === 401) {
        console.log('Not Authenticated'+ operation);
      } else {
        console.log('Other error'+ operation);
        console.error(error);
      }

      return of(result as T);
    };
  }

}
