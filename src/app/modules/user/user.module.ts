import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { DoNothingDirective } from './do-nothing.directive';
import { UsersService } from './services/users.service';
import { AbstractUserService } from './services/abstract-users.service';
import { AppConfig } from 'src/app/app.config';
import { Users2Service } from './services/users2.service';
import { UserPipe } from './pipes/user.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormByCodeComponent } from './forms/user-form-by-code/user-form-by-code.component';
import { UserFormByTemplateComponent } from './forms/user-form-by-template/user-form-by-template.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './store/users.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    DoNothingDirective,
    UserPipe,
    UserFormByCodeComponent,
    UserFormByTemplateComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    NgxsModule.forRoot([
      UsersState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),

    MatDialogModule,
    MatTableModule
  ],
  providers: [
    {
      provide: AbstractUserService,
      deps: [
        AppConfig,
        HttpClient
      ],
      useFactory: (
        appConfig: AppConfig,
        httpClient: HttpClient
      ) => {
        if (appConfig.mode === 1) {
          return new UsersService();
        } else {
          return new Users2Service(
            appConfig,
            httpClient
          );
        }
      }
    }
  ],
  exports: [
    UsersComponent,
    UserFormByTemplateComponent,
    UserDetailsComponent
  ]
})
export class UserModule { }
