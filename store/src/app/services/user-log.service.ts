import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {
  private users$: BehaviorSubject<any>;

  isAuthenticated = false;
  userLoggedIn: string;

  constructor(private http: HttpClient) {
    this.users$ = new BehaviorSubject<any>({ Users: [] });
    this.http.get('/assets/users.json').toPromise().then(
      (res: any[]) => {
        // Success
        this.users$.next(res);
      }
    );
  }

  logIn(user: string, password: string) {
    return this.users$.pipe(
      map((userObj => {
        if (userObj.Users.filter(u => u.name === user && u.password === password).length > 0) {
          this.isAuthenticated = true;
          this.userLoggedIn = user;
          return user;
        }
        throwError('User Not Found');
      })
      ))
  }

  logOut() {
    this.isAuthenticated = false;
    this.userLoggedIn = '';
  }

}
