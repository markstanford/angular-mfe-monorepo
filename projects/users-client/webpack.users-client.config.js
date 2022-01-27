const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  []);

module.exports = {
  output: {
    uniqueName: "usersClient",
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
      name: "usersClient",
      filename: "remoteEntry.js",
      exposes: {
        './UsersModule': './projects/users-client/src/app/users/users.module.ts'
      },
      shared: share({
        "@angular/animations": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/cdk": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/material/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
        "@angular/material/table": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
        "@angular/material/button": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/entity": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "rxjs": { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: true },
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin()
  ],
};
