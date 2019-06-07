import {Component, HostListener, Input, OnInit} from '@angular/core';
import {TooltipService} from '../services/tooltip.service';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.sass']
})

export class TooltipContainerComponent implements OnInit {
  @Input('buttonText') buttonText: string;
  @Input('tooltipText') tooltipText: string;
  isTooltipOpened = false;

  constructor(private tooltipService: TooltipService) {}

  ngOnInit() {
    this.tooltipService.status.subscribe(newStatus => {
      this.isTooltipOpened = newStatus;
    });
  }

  showTooltip(val: boolean) {
    this.tooltipService.toggleTooltip(false);

    this.isTooltipOpened = val;
  }
}
