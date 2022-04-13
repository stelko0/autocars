# Autocars

This project was created by me. I use Angular (Front-End Framework). It is a platform for selling cars. You have the opportunity to create an account, launch your car for sale and view other people's cars.

## Pages available to logged users
  - **Dynamic Edit Page** - It is loaded with the data of the selected car in a similar form, which is used when adding a car.
  - **Dynamic Delete Page** - The data for the selected car is loaded in one field and the user is asked if he is sure that he wants to delete the car from the database.

## Pages available to logged out users
  - **Dynamic Home Page** - Shows how many cars are available on the database
  - **Dynamic Catalog Page** - Shows all cars available in the database showing the make, model, kilometers and price as well as a button for details, if there are no cars displays the message "No cars in database!" 
  - **Dynamic Detail Car Page** - Shows all the information of the car, which includes a description. If you own the car, you have the right to edit and delete buttons, if you do not own these buttons.
  - **Static Login Page**
  - **Static Register Page**
  - **Static Not Found 404 Page**

## Back-end

My project uses for Firebase provided by Google.
Together with the FormModule, FormGroups and others, requests are received between the project and the database.

## Technlogy
  - Angular 13
  - TypeScript
  - JavaScript
  - HTML
  - CSS











This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


