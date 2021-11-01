import { Component } from '@angular/core';
import { WidgetProxyOptions } from './shared/widget-proxy/widget-proxy-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messagesHeaderWidgetOptions: WidgetProxyOptions = {
    remoteName: 'messagesClient',
    exposedModule: './MessagesHeaderWidgetComponent',
    componentName: 'MessagesHeaderWidgetComponent'
  };
}
