import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  /**
   * Ce selecteur est utilise dans les template
   */
  selector: '[appAppendDefaultText]'
})
export class AppendDefaultTextDirective {

  constructor(private el: ElementRef) { }

  /**
   * focus est evenement JS
   */
  @HostListener('focus') onFocus() {
    this.appendUserName();
  }

  private appendUserName() {

    /**
     * const inputTextElement = <HTMLInputElement>this.el.nativeElement;
     * inputTextElement.value = "Ngor SECK";
     * */
    this.el.nativeElement.value = "Ngor SECK";
  }
}
