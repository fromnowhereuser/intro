import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
