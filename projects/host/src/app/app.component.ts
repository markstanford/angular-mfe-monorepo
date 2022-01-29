import { Component } from '@angular/core';
import { WidgetProxyOptions } from './shared/widget-proxy/widget-proxy-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messagesHeaderWidgetOptions: WidgetProxyOptions = {
    type: 'module',
    remoteEntry: 'http://localhost:5002/remoteEntry.js',
    exposedModule: './MessagesHeaderWidgetComponent',
    componentName: 'MessagesHeaderWidgetComponent'
  };
}
