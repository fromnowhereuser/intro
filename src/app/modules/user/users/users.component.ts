import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../services/abstract-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  // @ViewChild('table')
  // table: MatTable<User>;

  users: Observable<Array<User>>;
  usersByResolver: Array<User>;
  displayedColumns: string[] = ['id', 'email', 'isAdmin', 'organisation', 'password'];

  constructor(
    public usersService: AbstractUserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
  }
  ngAfterViewInit(): void {
    // console.log(this.table);
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersByResolver = this.activatedRoute.snapshot.data['users'];

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
