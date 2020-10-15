import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../common/landing/landing.component';
import { ErrorComponent } from '../common/error/error.component';
import { UsersComponent } from '../modules/user/users/users.component';
import { AuthComponent } from '../modules/auth/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
