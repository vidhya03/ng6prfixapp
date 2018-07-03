import { Directive,
   OnInit,
   Renderer2,
   ElementRef,
   RendererStyleFlags2,
   HostListener,
   HostBinding,
   Input} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string;
  @Input('appBetterHighlight') highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;

  }
  @HostListener('mouseenter') mouseenter(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement,'color','yellow',RendererStyleFlags2.DashCase);
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement,'color','black');
  }
}
