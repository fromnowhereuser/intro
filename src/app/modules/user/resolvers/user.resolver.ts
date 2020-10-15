import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { find, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../services/abstract-users.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
    constructor(
        private userService: AbstractUserService
    ) {

    }
    resolve(route: ActivatedRouteSnapshot): Observable<User> | Promise<User> | User {
        const id = parseInt(route.paramMap.get('id'));

        return this.userService
            .getUsers()
            .pipe(
                switchMap(users => users),
                find(user => user.id === id)
            );
    }
}