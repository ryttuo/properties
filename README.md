# AngularMaterialBase

This is a boileplate project with Angular 7, Angular Material, using [@ngrx](https://github.com/ngrx) to handle aplication state and lazy loading implementation, you can create your own Angular 7 project with everything ready to focus into coding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Demo

You can see this demo [here](http://labs.ryttuo.com)

## Angular Material UX Template

This project already has angular material design components [Angular Material](https://github.com/angular/material2) version 6.2.1 with several components

Just import MaterialModule for each lazy module and you could use a lot of angular material components, if you need add a new one just put into this Module also.

## Prefix (amb-)

This project is using a amb prefix (Angular Material Base) and you should change it to the property prefix for your project.

## Default sass styles files and custom color palletes 

In the theme.scss you can see curent color palettes, just change primary, accent and warn values to get your own [theme](https://material.angular.io/guide/theming)

## Install

1. clone the repo `git clone https://github.com/ryttuo/properties`
2. go to the project and `npm install`

##RUN web browser without CORS

    ### OSX type in terminal: **open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security**

    ### Windows **[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp**

    ### LINUX **google-chrome --disable-web-security**

    #### Reference [here](https://alfilatov.com/posts/run-chrome-without-cors)

## Local Enviroment

Run `ng serve` for a local environment. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
