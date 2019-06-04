import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';
import { TooltipInfoComponent } from './tooltip-info/tooltip-info.component';
import { TooltipButtonComponent } from './tooltip-button/tooltip-button.component';
import { TooltipService } from './services/tooltip.service';
import { TooltipPositionDirective } from './directives/tooltip-position.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipContainerComponent,
    TooltipInfoComponent,
    TooltipButtonComponent,
    TooltipPositionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
