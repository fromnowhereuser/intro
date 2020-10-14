import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './common/landing/landing.component';
import { UserModule } from './modules/user/user.module';
import { AppConfig, CONFIG1, CONFIG2 } from './app.config';
import { ErrorComponent } from './common/error/error.component';
import { MenuComponent } from './common/menu/menu.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ErrorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    UserModule
  ],
  providers: [
    {
      provide: AppConfig,
      useValue: CONFIG2
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
