import { HttpClient, HttpClientModule } from '@angular/common/http';
import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { find, map, switchMap, tap, toArray } from 'rxjs/operators';
import { AppConfig } from 'src/app/app.config';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from './abstract-users.service';

@Injectable({
  providedIn: 'root'
})
export class Users2Service extends AbstractUserService {

  constructor(
    private appConfig: AppConfig,
    private http: HttpClient
  ) {
    super();
  }

  addUser(user: User): Observable<Array<User>> {
    console.log('add');

    return this
      .http
      .post<Array<User>>(this.appConfig.apiendpoint, user)
      .pipe(
        map(json => plainToClass(User, json)),
        tap(users => this.usersSubject.next(users))
      )
  }

  deleteUser(todel: User) {
    throw new Error('Method not implemented.');
  }

  getUsers(): Observable<Array<User>> {
    return this
      .http
      .get<Array<any>>(this.appConfig.apiendpoint)
      .pipe(
        map(json => plainToClass(User, json)),
        tap(val => {
          this.usersSubject.next(val);
        }),
      )
  }

  isEmailTaken(tofind: string): Observable<Boolean> {
    return this.getUsers()
      .pipe(
        switchMap(users => users),
        map(user => user.email),
        find(email => email === tofind),
        map(email => email ? true : false)
      );
  }

}
