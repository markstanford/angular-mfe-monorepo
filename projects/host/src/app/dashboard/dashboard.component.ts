import { Component, OnInit } from '@angular/core';
import { WidgetProxyOptions } from '../shared/widget-proxy/widget-proxy-options';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  widgetOptions: WidgetProxyOptions[] = [
    {
      remoteName: 'usersClient',
      exposedModule: './UsersDashboardWidgetComponent',
      componentName: 'UsersDashboardWidgetComponent'
    },
    {
      remoteName: 'messagesClient',
      exposedModule: './MessagesDashboardWidgetComponent',
      componentName: 'MessagesDashboardWidgetComponent'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
