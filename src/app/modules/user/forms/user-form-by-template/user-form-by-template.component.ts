import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../../services/abstract-users.service';
import { AddUser } from '../../store/users.action';

@Component({
  selector: 'app-user-form-by-template',
  templateUrl: './user-form-by-template.component.html',
  styleUrls: ['./user-form-by-template.component.scss']
})
export class UserFormByTemplateComponent implements OnInit {

  @Output('userInput')
  userInput = new EventEmitter<User>();

  user = new User(0, '');

  constructor(
    private userService: AbstractUserService,
    private store: Store
  ) {

  }

  ngOnInit(): void {
  }

  public submit(values: any) {
    const nu = new User(0, '');
    Object.assign(nu, this.user);
    this.store
      .dispatch(new AddUser(nu))
    // this.userService.addUser(nu).subscribe();
    // this.userInput.emit(nu);
  }
}
