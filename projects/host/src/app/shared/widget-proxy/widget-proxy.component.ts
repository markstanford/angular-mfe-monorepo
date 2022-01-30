import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

import { WidgetProxyOptions } from './widget-proxy-options';

@Component({
  selector: 'app-widget-proxy',
  templateUrl: './widget-proxy.component.html',
  styleUrls: ['./widget-proxy.component.scss']
})
export class WidgetProxyComponent implements AfterViewInit {
  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  @Input() options!: WidgetProxyOptions;

  loading = true;
  remoteLoadingFailed = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.viewContainer?.clear();

    loadRemoteModule(this.options)
      .then((m) => {
        const component = m[this.options.componentName];
        this.viewContainer?.createComponent(component);
        this.loading = false;
      })
      .catch((error: any) => {
        this.remoteLoadingFailed = true;
        this.loading = false;
        console.log(`error loading remote component ${this.options.componentName}`, error);
      });
  }
}
