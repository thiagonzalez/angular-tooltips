import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appTooltipPosition]'
})
export class TooltipPositionDirective implements OnChanges {
  @Input() appTooltipPositionOpened: string;
  @Input() appTooltipPositionBottomCssClass: string;

  private readonly nativeElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    const isVisible = this.isScrolledIntoView(this.nativeElement);

    if (isVisible) {
      this.nativeElement.classList.remove(this.appTooltipPositionBottomCssClass);
    } else {
      this.nativeElement.classList.add(this.appTooltipPositionBottomCssClass);
    }
  }

  private isScrolledIntoView(nativeElement: HTMLElement): boolean {
    const rect = nativeElement.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
  }
}
