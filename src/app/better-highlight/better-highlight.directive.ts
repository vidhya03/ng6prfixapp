import { Directive, OnInit, Renderer2, ElementRef, RendererStyleFlags2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.renderer.setStyle(this.elRef.nativeElement,'color','yellow',RendererStyleFlags2.DashCase);

  }
}
