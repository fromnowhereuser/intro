import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = new Array<User>();

  constructor() {
    this.users.push(new User(0, 'john@lol.com'));
    this.users.push(new User(1, 'kayzer@lol.com'));
    this.users.push(new User(2, 'wallace@lol.com'));
  }

  ngOnInit(): void {
  }

}
