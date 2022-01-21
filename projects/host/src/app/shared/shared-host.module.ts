import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetProxyComponent } from './widget-proxy/widget-proxy.component';

@NgModule({
  declarations: [WidgetProxyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetProxyComponent
  ]
})
export class SharedHostModule { }
