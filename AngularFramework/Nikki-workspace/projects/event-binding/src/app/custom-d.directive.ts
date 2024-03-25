import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomD]',
  standalone: true
})
export class CustomDDirective {

  constructor(private el:ElementRef) { 
    // console.log(el);
    el.nativeElement.style.border='2px solid red';
    el.nativeElement.style.color='yellow'
    el.nativeElement.style.background='black';
    }
}
