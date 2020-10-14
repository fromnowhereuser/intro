import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../services/abstract-users.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<Array<User>>;

  constructor(
    public usersService: AbstractUserService
  ) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  handleColorAffect(color: string) {
    console.log(color);
  }

  handleUserInput(user: User) {
    this.usersService.addUser(user).subscribe(
      users =>
        this.users = of(users)
    );
  }




}
