import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../services/abstract-users.service';

@Injectable({
    providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

    constructor(
        private usersService: AbstractUserService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> | Promise<User[]> | User[] {
        return this.usersService.getUsers();
    }
}