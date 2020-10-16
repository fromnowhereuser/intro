import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { plainToClass } from 'class-transformer';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../services/abstract-users.service';
import { Users2Service } from '../services/users2.service';
import { AddUser } from './users.action';

export class UsersStateModel {
    users: Array<User>;
    isLoaded: boolean;
}

@State<UsersStateModel>({
    name: 'users',
    defaults: {
        users: [],
        isLoaded: false
    }
})
@Injectable()
export class UsersState {
    constructor(
        private userService: AbstractUserService
    ) {
    }

    @Selector()
    static getUsers(state: UsersStateModel) {
        return state.users;
    }

    @Selector()
    static isLoaded(state: UsersStateModel) {
        return state.isLoaded;
    }

    @Action(AddUser)
    addUser(
        { patchState, getState }: StateContext<UsersStateModel>,
        { payload }: AddUser
    ) {
        return this.userService
            .addUser(payload)
            .pipe(
                tap((result) => {
                    // const state = getState();
                    patchState({
                        users: result,
                        isLoaded: true
                    })
                })
            )

    }


}
