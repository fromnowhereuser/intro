import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
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
    public appConfig: AppConfig
  ) {

  }

  ngOnInit(): void {

    const values = [1, 2, 3, 4, 5];

    of(values).subscribe(value => console.log(value));

    from(values).subscribe(value => console.log(value));



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
