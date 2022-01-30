import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { WidgetProxyComponent } from './widget-proxy/widget-proxy.component';

@NgModule({
  declarations: [WidgetProxyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    WidgetProxyComponent
  ]
})
export class SharedHostModule { }
