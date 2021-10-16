# AngularMfeMonorepo

An Angular monorepo for testing micro frontends using webpack module federation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

This monorepo contains: 
- Host - App shell which loads the 2 MFEs
- Users Client - Users feature MFE
- Messages Client - Messages feature MFE
- Shared - Shared Library

Each MFE exposes a feature module and a standalone dashboard widget component. The Host app loads the feature modules via dynamic loading in the app router config and manually loads the dashboard widgets. 

Reference:
https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Project Setup

### Create App
Creates the monorepo structure with the host app, 2 clients and a shared library.
```
npx @angular/cli new angular-mfe-monorepo --create-application false
ng g application host
ng g application users-client
ng g application messages-client
ng g library shared
```

### Add @angular-architects Library
```
ng add @angular-architects/module-federation --project host --port 5000
ng add @angular-architects/module-federation --project users-client --port 5001
ng add @angular-architects/module-federation --project messages-client --port 5002
```

### Add NGRX
```
ng add @ngrx/store@latest --project host
ng add @ngrx/store@latest --project users-client
ng add @ngrx/store@latest --project messages-client
ng add @ngrx/store-devtools@latest --project host
ng add @ngrx/store-devtools@latest --project users-client
ng add @ngrx/store-devtools@latest --project messages-client
ng add @ngrx/store-devtools@latest --project host
ng add @ngrx/store-devtools@latest --project host
ng add @ngrx/effects@latest --project host
ng add @ngrx/effects@latest --project users-client
ng add @ngrx/effects@latest --project messages-client
ng add @ngrx/entity@latest
```

### Configure MFE Shared Libraries
Add NGRX libs to the libraries shared between host and MFEs.

```
shared: share({
  ...
  "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  "@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  "@ngrx/entity": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  ...
})
```

### Users Client Exposed Feature Module
```
ng g m users --routing --project users-client 
ng g c users/users-list --module users --project users-client
ng g c users/users-dashboard-widget -m users --project users-client
```

### Messages Client Exposed Feature Module And Dashboard Widget
```
ng g m messages --routing --project messages-client 
ng g c messages/messages-list --module messages --project messages-client
ng g c messages/messages-dashboard-widget -m messages --project messages-client
```

### Host App Routing

### Configure Host main.ts 
This will preload the metadata of the remote MFEs. This allows module federation to choose the highest compatible app dependency where they differ across MFEs (https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md#part-4-switch-to-dynamic-federation).

```
import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:5001/remoteEntry.js', 'usersClient'),
  loadRemoteEntry('http://localhost:5002/remoteEntry.js', 'messagesClient')
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));

```

#### app-routing.module.ts
```
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => loadRemoteModule({
      remoteName: 'usersClient',
      exposedModule: './Module'
    }).then((m) => m.UsersModule)
  },
  {
    path: 'messages',
    loadChildren: () => loadRemoteModule({
      remoteName: 'messagesClient',
      exposedModule: './Module'
    }).then((m) => m.MessagesModule)
  }
];
```

### Users Client App Routing

#### app-routing.module.ts
```
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];
```

#### ./users/users-routing.module.ts
```
const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  }
];
```

### Messages Client App Routing

#### app-routing.module.ts
```
const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then((m) => m.MessagesModule)
  },
  {
    path: '**',
    redirectTo: 'messages',
    pathMatch: 'full'
  }
];
```

#### ./messages/messages-routing.module.ts
```
const routes: Routes = [
  {
    path: '',
    component: MessagesListComponent
  }
];
```

### Configure Webpack Exposed Client Modules And Shared Lib
Adding the monorepo `shared` lib here ensures one version will be used across the app. 

#### Update tsconfig.ts Path To Shared Lib

```
"paths": {
  "shared": [
    "projects/shared/src/public-api.ts"
  ]
}
```

#### All webpack.config.js Files
```
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['shared']);
```

#### Users Client webpack.config.js
```
exposes: {
  './UsersModule': './projects/users-client/src/app/users/users.module.ts',
  './UsersDashboardWidgetComponent': './projects/users-client/src/app/users/users-dashboard-widget/users-dashboard-widget.component.ts',
},
...
```

#### Messages Client webpack.config.js
```
...
exposes: {
  './MessagesModule': './projects/messages-client/src/app/messages/messages.module.ts',
  './MessagesDashboardWidgetComponent': './projects/messages-client/src/app/messages/messages-dashboard-widget/messages-dashboard-widget.component.ts',
},
...
```

### Shared Assets
Add to library and then include in Angular.json build for each project:

```
  "assets" {
    ...
    {
      "input": "projects/shared/assets",
      "glob": "**/*.json",
      "output": "assets"
    }
  }
```



#### Generate Sample JSON
https://www.json-generator.com/#


### Shared Library
Add NGRX feature states.

#### Generate services 
```
ng g s services/users --project shared
ng g s services/messages --project shared
```

### NGRX Feature States
1. Add to shared library
2. Import into feature modules for users and messages

NB at this point dynamically loaded feature modules will include the feature state.

3. Add feature state to host dashboard module.

NB Because the dashboard dynamically loads components rather than modules, any dependencies the component uses e.g. services or NGRX feature stores need to be included in the host' dashboard module. It's hoped that when Angular allows module-less components that this won't be required (see https://github.com/angular/angular/discussions/43784).




### Gotchas
- If the host app complains of missing libraries/services then check the library is being shared in the MFE's webpack config as a shared library. 
