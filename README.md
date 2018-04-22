# LoginLogoutWorkflow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Project Structure 
Client
```
src
+---app
|   |   app.component.css 
|   |   app.component.html
|   |   app.component.spec.ts
|   |   app.component.ts
|   |   app.module.ts 
|   |   app.routes.ts # Contains Angular Routing
|   |
|   +---login # Contains login view
|   +---model # Contains Models
|   +---services # Contains Http, authentication  and cookie api services
|   +---status # Contains status of login, logout view
|   +---user-details # Private view specific to logged in user only
|   \---welcome # General view open to everyone
|
+---assets # For adding resources
|
\---environments # For adding env specific dependencies
```

Server
```
server
|   server.js  # Contains main base server logic
|
+---api-fixtures # Contains Users mock data
|
+---config # Contains application config 
|
\---controllers # Contains authentication controller
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
