import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from './abstract-users.service';
import { ApiService } from './api.service';

@Injectable()
export class UsersService extends AbstractUserService {
  isEmailTaken(email: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  private users = new Array<User>();

  constructor(
  ) {
    super();
    this.addUser(new User(0, 'john@lol.com'));
    this.addUser(new User(1, 'kayzer@lol.com'));
    this.addUser(new User(2, 'wallace@lol.com'));
  }

  addUser(user: User) {
    this.users.push(user);
    return of(this.users);
  }


  deleteUser(todel: User) {
    // let index = this.users.findIndex(function (user) {
    //   return user.id === todel.id;
    // });
    const index = this.users.findIndex((user) => user.id === todel.id);
    this.users.splice(index, 1);
  }

  getUsers() {
    return of(this.users);
  }

}
