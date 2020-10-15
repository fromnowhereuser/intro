import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = {
    caption: 'intro'
  };

  money = 19237;
  date = new Date();

  constructor(
    public appConfig: AppConfig,
    public router: Router
  ) {

  }

  ngOnInit(): void {

    // this.router.navigate(['users', 10]) // #/users/1

    // let i = 0;

    // const o = new Observable((sub) => {
    //   setInterval(() => {
    //     sub.next(i++);
    //   }, 1000);
    // });

    // o
    //   .pipe(
    //     filter(i => i > 5)
    //   )
    //   .subscribe(val => console.log(val));

    // o
    //   .pipe(
    //     map((i: number) => 100 * i)
    //   )
    //   .subscribe(val => console.log(val));


    // const values = [1, 2, 3, 4, 5];

    // of(values)

    // from(values)



  }

  public handleClickEvent(event: MouseEvent) {
    console.log(event);
  }

  public handleShowValue(elem: HTMLInputElement) {
    console.log('handleShowValue');
  }

  /*
  TODO: Creer un input de type couleur.
  Lors de la selection d'une couleur, on changera
  également la couleur du paragraphe

  */

}
