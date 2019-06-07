## Installation
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

First, you need to execute `npm install` so you can have all the dependencies installed.


## Start the server
```
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Deploy to Github Pages
```
npm install i -g angular-cli-ghpages
ng build --prod --base-href 'https://thiagonzalez.github.io/angular-tooltips/'
ngh --dir ./dist/angular-tooltips

```
I am using Github Pages to host [this project](https://thiagonzalez.github.io/angular-tooltips/). 
This command will commit the changes to the `gh-pages` branch and also push a deploy to Github Pages updating the environment.


## What I decided to use

### angular-cli
Easy way to create an application that already works. I decided to use it just to avoid creating everything from zero.

### npm
angular-cli generates the whole project using npm.

### Sass
Easy way to write CSS code. Open doors to use metodologies like BEM, which makes your code easier to read and maintain.

### GH Pages
A cloud environment provided by Github with almost zero configuration, which makes easier to provide a real URL for your project.

## Problems
I didn't have time to study how to create tests using Angular, which is pretty much different than React.