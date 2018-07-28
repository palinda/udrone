
# Web-Admin

[![Build Status](https://travis-ci.com/ustocktrade/ust-ui.svg?token=e8EzsDsuxzkL1NY3sibq&branch=master)](https://travis-ci.com/ustocktrade/ust-ui)  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/ea53fc7d0fc14d3bbb591876a5b8d5d2)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ustocktrade/ust-ui&amp;utm_campaign=Badge_Grade)  [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/ea53fc7d0fc14d3bbb591876a5b8d5d2)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=ustocktrade/ust-ui&utm_campaign=Badge_Coverage)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

![alt text](https://github.com/ustocktrade/ust-ui/blob/master/imgs/diagram.png)

-	Widget Components and Query Components can attach to Container Components
-	Container Component has 2 types 
	Widget Container – Only Widget Components can attach
	Query Container – Only Query Components can attach
-	Widget Templates, Query Templates and Container Templates predefined by the developer using unit components
-	Widget, Query and Container Component create dynamically. Saved in Widget Repository
-	Widget Repository is in server side. This can implement as a JSON file and load using service worker to the client side. 
-	 Widget Repository maintain globally
-	Profile maintain per user for what user can customize
	User added shortcuts to task bar
	User can create user only custom container components. These container widgets added to the global container components list for that user


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
