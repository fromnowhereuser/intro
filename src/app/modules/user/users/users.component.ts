import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../services/abstract-users.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  constructor(
    public usersService: AbstractUserService
  ) {
  }

  ngOnInit(): void {
  }

  handleColorAffect(color: string) {
    console.log(color);
  }

  handleUserInput(user: User) {
    this.usersService.addUser(user);
  }




}
