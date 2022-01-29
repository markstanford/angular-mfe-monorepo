import { LoadRemoteModuleEsmOptions } from "@angular-architects/module-federation-runtime";

export interface WidgetProxyOptions extends LoadRemoteModuleEsmOptions {
  componentName: string;
}
