import {Component, ElementRef, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-tooltip-info',
  templateUrl: './tooltip-info.component.html',
  styleUrls: ['./tooltip-info.component.sass']
})

export class TooltipInfoComponent {
  @Input() isTooltipOpened: boolean;
  @Input() tooltipText: string;
}
