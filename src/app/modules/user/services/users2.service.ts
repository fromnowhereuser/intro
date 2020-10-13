import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from './abstract-users.service';

@Injectable({
  providedIn: 'root'
})
export class Users2Service extends AbstractUserService {


  constructor() {
    super();
  }

  addUser(user: User) {
    throw new Error('Method not implemented.');
  }
  deleteUser(todel: User) {
    throw new Error('Method not implemented.');
  }
  getUsers() {
    throw new Error('Method not implemented.');
  }
}
