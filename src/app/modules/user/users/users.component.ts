import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../services/abstract-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<Array<User>>;
  usersByResolver: Array<User>;

  constructor(
    public usersService: AbstractUserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersByResolver = this.activatedRoute.snapshot.data['users']

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

  handleDetails() {
    this.router.navigate([]);
  }




}
