import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  private statusBehavior = new BehaviorSubject(false);
  status = this.statusBehavior.asObservable();

  constructor() { }

  toggleTooltip(open: boolean) {
    this.statusBehavior.next(open);
  }
}
