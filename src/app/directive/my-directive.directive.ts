import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  /**
   * Ce selecteur est utilise dans les template
   */
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) { }

  /**
   * mouseenter est evenement JS
   */

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  /**
   * mouseleave est evenement JS
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
