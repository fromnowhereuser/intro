import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {
  private users = new Array<User>();

  constructor(
    private api: ApiService
  ) {
    this.addUser(new User(0, 'john@lol.com'));
    this.addUser(new User(1, 'kayzer@lol.com'));
    this.addUser(new User(2, 'wallace@lol.com'));
  }

  addUser(user: User) {
    this.users.push(user);
  }


  deleteUser(todel: User) {
    // let index = this.users.findIndex(function (user) {
    //   return user.id === todel.id;
    // });
    const index = this.users.findIndex((user) => user.id === todel.id);
    this.users.splice(index, 1);
  }

  getUsers() {
    return this.users;
  }

}
