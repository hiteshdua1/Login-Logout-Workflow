# LoginLogoutWorkflow



## Project Structure 
Client
```
src
+---app
|   |   app.component.css 
|   |   app.component.html
|   |   app.component.ts
|   |   app.module.ts 
|   |   app.routes.ts # Contains Angular Routing
|   |
|   +---login # Contains login view
|   +---model # Contains Models
|   +---services # Contains Http, authentication, status  and cookie api services
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


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running Express Server
Run `node server/server.js` to run the express server . The express server will serve the static files from 'dist' directory.

## Build the Project and run App.
Run `npm start` to build the project and start express server to serve the static files. Open *http://localhost:3000* to run the app in browser.



