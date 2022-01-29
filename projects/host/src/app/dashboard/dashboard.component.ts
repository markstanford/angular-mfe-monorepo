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
      type: 'module',
      remoteEntry: 'http://localhost:5002/remoteEntry.js',
      exposedModule: './MessagesDashboardWidgetComponent',
      componentName: 'MessagesDashboardWidgetComponent'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
