import { Directive, OnInit, Renderer2, ElementRef, RendererStyleFlags2, HostListener } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {

  }
  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.renderer.setStyle(this.elRef.nativeElement,'color','yellow',RendererStyleFlags2.DashCase);
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.renderer.setStyle(this.elRef.nativeElement,'color','black');
  }
}
