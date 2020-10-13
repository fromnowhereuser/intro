import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from './users.service';

// @Injectable({
//     providedIn: 'root',
//     useClass: UsersService
// })
export abstract class AbstractUserService {
    abstract addUser(user: User);
    abstract deleteUser(todel: User);
    abstract getUsers();
}