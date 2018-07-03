import { Directive,
   OnInit,
   Renderer2,
   ElementRef,
   RendererStyleFlags2,
   HostListener,
   HostBinding } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {

  }
  @HostListener('mouseenter') mouseenter(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = 'blue';
    this.renderer.setStyle(this.elRef.nativeElement,'color','yellow',RendererStyleFlags2.DashCase);
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = 'transparent';
    this.renderer.setStyle(this.elRef.nativeElement,'color','black');
  }
}
