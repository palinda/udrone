import { Renderer, Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  @Input()
  set appFocus(value: boolean) {
    if (value) {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
  }

}
