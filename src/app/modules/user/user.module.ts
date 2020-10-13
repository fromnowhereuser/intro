import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { DoNothingDirective } from './do-nothing.directive';
import { UsersService } from './services/users.service';
import { AbstractUserService } from './services/abstract-users.service';

@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    DoNothingDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AbstractUserService,
      useClass: UsersService
    }
  ],
  exports: [
    UsersComponent
  ]
})
export class UserModule { }
