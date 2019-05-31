import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.sass']
})

export class TooltipContainerComponent {
  @Input('buttonText') buttonText: string;
  @Input('tooltipText') tooltipText: string;
  isTooltipOpened: boolean = false;

  showTooltip(val: boolean) {
    this.isTooltipOpened = val;
  }
}
