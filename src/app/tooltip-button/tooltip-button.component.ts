import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.sass']
})

export class TooltipButtonComponent {
  @Input() buttonText: string;
  @Output() showTooltip = new EventEmitter<boolean>();

  onTooltipChange() {
    this.showTooltip.emit(true);
  }
}
