import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from '../../entity/user';

import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserProvider {

  allUsersUrl = "http://localhost:8080/users/all";
  userUrl = "http://localhost:8080/users/user";
  loginUrl = "http://localhost:8080/users/login";
  usermUrl = "http://localhost:8080/users/userm";
  logg = false;
  public token: Boolean;

  constructor(private https: HttpClient) { 
  }
  

  createUser (user: User): Observable<User> {
    return this.https.post<User>(this.userUrl, user, httpOptions).pipe(
      tap((user: User) => this.log(`added user service`)),
      catchError(this.handleError<User>('eroor service'))
    );
  }

  login(mail,password:string): Observable<Boolean> {
    const url = `${this.loginUrl}/${mail}/${password}`;
    return this.https.get<Boolean>(url).pipe(
      tap(_ => this.log(`fetched hero `)),
      catchError(this.handleError<Boolean>(`getHero `))
    );
  }

  getUserByMail(mail:string): Observable<User> {
    const url = `${this.usermUrl}/${mail}/`;
    return this.https.get<User>(url).pipe(
      tap(_ => this.log(`fetched hero `)),
      catchError(this.handleError<User>(`getHero `))
    );
  }
  
  //Update User
  updateUser(user: User): Observable<any> {
    return this.https.put(this.userUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated hero`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  
  login2(mail,password:string): Observable<Boolean> {
    const url = `${this.loginUrl}/${mail}/${password}`;
    return this.https.get<Boolean>(url).map((response: any) => {
        let token = response;
        console.log(token);
        if (token==true) {
            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({ mail: mail, token: token }));
            console.log(token+mail);
            // return true to indicate successful login
            return true;
           
        } else {
            // return false to indicate failed login
            console.log('pas auth');

            return false;
        }
    });
}

  
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
private log(message: string) {
  console.log(message);
}


}