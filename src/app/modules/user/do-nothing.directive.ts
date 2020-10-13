import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit {

  @Input('color')
  color: string;

  @Output('colorAffect')
  colorAffect = new EventEmitter<string>();

  constructor(
    private ref: ElementRef
  ) {
    console.log('DoNothingDirective');
  }

  ngOnInit(): void {
    (this.ref.nativeElement as HTMLDivElement).style.background = this.color;
    (this.ref.nativeElement as HTMLDivElement).addEventListener('click',
      () => {
        this.colorAffect.emit(this.color);
      })
  }


}
