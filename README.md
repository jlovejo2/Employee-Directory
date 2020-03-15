# Employee-Directory
Front-end application for viewing non-confidential information of employees from database

the link to github is shown below:
https://github.com/jlovejo2/Employee-Directory.git

the link to the functional app is shown below:
https://Employee-Directory-jlovejo2.herokuapp.com/

## Table of Contents
* [User Story](#user-story)
* [Version 1.0](#version-1.0)
* [How To Use](#how-to-use)
* [Coding Languages Used](#coding-languages-used)
* [NPMs Used](#npms-used)
* [CSS Framework](#css-framework)
* [Structure of Code and Functions](#structure-of-code-and-functions)
* [Known Issues With Code](#known-issues-with-code)

## User Story
As a user I am in need of a user-friendly UI that allows me to search through my employee database for general information on the employees.  I would like an ability to sort all the results in descending and ascending order of certain columns.  As well the ability of filtering the results that are displayed in the table based on specific criteria. 

## Version 1.0
* This employee-directory app runs via heroku or by entering the command "npm start" to initialize the react server.
* Make sure you are in the main folder when running the code on the command line.
* This app does have two pages a "Home" and "Employees" page.  The employees page displays renders random employees in the table from the 'https://randomuser.me/api/?results=50&nat=us' api.  The employees table is searchable based on criteria in the searchbar and dropdown.  User can also click on the "full name" and "years with company" to sort the table based on those columns.

## How To Use
See the layout of the app below.

- STEP 1: The app opens up on the home page of the site which.  The navbar is generated at the top.  Clicking on Home will take you back to home page.  Employees will take you to the employee page.

![alt text](/public/assets/images/home-page.png "Starting page of App") 

- The employee page will render with all employees rendered into a bootstrap table.  The blue box indicates the two components that allow for filtering of the table. The green box is the 'full name' column and clicking on it will sort the employees in ascending order by first name.  CLicking again will flip the order.  The red box is the 'years with company company and has the same functionality as the 'full name column
   
![alt text](/public/assets/images/employee-page_LI.jpg "Employee Page") 

- This image shows the three options the user has to filter the table results by:
    - First name
    - Last name
    - Years with company

![alt text](/public/assets/images/drop-down.png "Drop-downP Options") 

- This shows you the type of results you can expect when using the filter functionality.  Actual filter value must be typed in search input component. 

![alt text](/public/assets/images/filter-example.png "Example of Table Filter Results") 


## Coding Languages Used
* HTML
* CSS
* Javascript
* React.js
* JSX

## NPMs Used:
* NPM axios
* NPM react
* NPM react-dom
* NPM react-router-dom
* NPM react-scripts

## CSS Framework:
* Bootstrap

## Structure of Code and Functions
* public folder
    - index.html - with react does not contain much code but necessary library links like for bootstrap.  It interacts with App.js
* src folder - this is the meat of react and holds most of the front-end code
    - components folder - all the html components that require some custom props and CSS have their own folder in component with an index.js file in it and style.css file if necessary
        - col
        - container
        - footer
        - navbar
        - row
        - searchTable
            - this component contains the select option and input for the filtering of the table
        - tableRow
            - this component is a tale row that is referenced in the employee.js.  The main reason it is its own component is so that it could be used in a map function and rendered for each employee from API
        - unorderedList
            - this component was created because I wanted to add CSS to it to make list-style-type: none. Has a style.css
        - wrapper
    - pages folder - contains the actual pages for the App
        - Home.js - this is the homepage for the app.  Only has some text on it as of now.
        - Employees.js - this page creates the employee table and contains some custom functions for sorting and filtering of table results.


## Known Issues With Code
* both the first name and years with company use the same ascKey to sort.  So they are both flipping it back and forth which could possibly be considered bad form.
* The app is set-up without using hooks such as useState, useEffect, etc so is a bit outdated.

