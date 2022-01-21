import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { AfterViewInit, Component, ComponentFactoryResolver, Injector, Input, ViewChild, ViewContainerRef } from '@angular/core';

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

  constructor(private injector: Injector, private cfr: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    this.viewContainer?.clear();

    loadRemoteModule(this.options).then((m) => {
      const component = m[this.options.componentName];
      const factory = this.cfr.resolveComponentFactory(component);
      this.viewContainer?.createComponent(factory, undefined, this.injector);
      this.loading = false;
    }), (error: any) => {
      console.log(`error loading remote component ${this.options.componentName}`, error);
    };
  }

}
