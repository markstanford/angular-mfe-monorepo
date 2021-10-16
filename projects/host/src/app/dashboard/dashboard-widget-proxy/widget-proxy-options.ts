import { LoadRemoteModuleOptions } from "@angular-architects/module-federation-runtime";

export interface WidgetProxyOptions extends LoadRemoteModuleOptions {
  componentName: string;
}
