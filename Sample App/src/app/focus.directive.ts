import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private element:ElementRef) { }
  @HostListener('submit') onSubmit():void{
    const invalidControl = this.element.nativeElement.querySelector('.ng-invalid');
    if(invalidControl){
      invalidControl.focus();
    }
  }

}
