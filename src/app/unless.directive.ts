import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[vidhyaUnless]"
})
export class UnlessDirective {
  @Input()
  set unless(condition: boolean) {

    if (!condition) {
      this.vcRef.createEmbeddedView(this.templaeRef);
    }else {
      this.vcRef.clear();
    }

  }

  constructor(private templaeRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}
