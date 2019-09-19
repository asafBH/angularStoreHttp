import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor() { }

  @HostListener('click') showMessage() {
    if (confirm('Are you sure?')) {
      console.log('User confirmed');
    }
    else {
      console.log('User canceld confirmation');
    }
  }

}
