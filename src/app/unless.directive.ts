import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[vidhyaUnless]'
})
export class UnlessDirective {

  @Input() unless ;


  constructor() { }

}
