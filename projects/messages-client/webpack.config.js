const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['shared']);

module.exports = {
  output: {
    uniqueName: "messagesClient",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "messagesClient",
      filename: "remoteEntry.js",
      exposes: {
        './MessagesModule': './projects/messages-client/src/app/messages/messages.module.ts',
        './MessagesDashboardWidgetComponent': './projects/messages-client/src/app/messages/messages-dashboard-widget/messages-dashboard-widget.component.ts',
      },
      shared: share({
        "@angular/animations": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/cdk": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/entity": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "rxjs": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin()
  ],
};
