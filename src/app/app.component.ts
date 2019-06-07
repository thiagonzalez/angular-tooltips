import {Component, HostListener} from '@angular/core';
import {TooltipService} from './services/tooltip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private tooltipService: TooltipService) {}

  @HostListener('document:click', ['$event'])
  click(event) {
    const clickedElement = event.target;

    if (this.isTooltipInfo(clickedElement)) {
      return false;
    }

    if (this.isTooltipButton(clickedElement) && this.parentWithTooltip(clickedElement)) {
      return false;
    }

    this.hideTooltips();
  }

  @HostListener('document:keydown.escape', ['$event']) onEscapeKeyDown() {
    this.hideTooltips();
  }

  private hideTooltips() {
    this.tooltipService.toggleTooltip(false);
  }

  private isTooltipButton(target) {
    return target.parentElement.tagName === 'APP-TOOLTIP-BUTTON';
  }

  private isTooltipInfo(target) {
    return target.parentElement.tagName === 'APP-TOOLTIP-INFO';
  }

  private parentWithTooltip(target) {
    return target.closest('app-tooltip-container').querySelector('app-tooltip-info');
  }
}
