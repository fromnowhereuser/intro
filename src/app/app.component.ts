import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title;

  public duTexte = 'qsfnqsdkmjfqsdfjklsqdfbkjbl';
  public color = 'orange';

  constructor() {
    setTimeout(() => this.title = {
      caption: 'intro'
    }, 1000)
  }

  ngOnInit(): void {
  }

  public handleClickEvent(event: MouseEvent) {
    console.log(event);
  }

  public handleShowValue(elem: HTMLInputElement) {
    console.log('handleShowValue');
    this.color = elem.value;
  }

  /*
  TODO: Creer un input de type couleur.
  Lors de la selection d'une couleur, on changera
  également la couleur du paragraphe

  */

}
