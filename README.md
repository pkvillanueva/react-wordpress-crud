# React WordPress CRUD [![Build Status](https://travis-ci.org/pkvillanueva/react-wordpress-crud.svg?branch=master)](https://travis-ci.org/pkvillanueva/react-wordpress-crud)

The solution I've chose is to develop a WordPress plugin that handles all the back-end functionalies and a theme that uses React to render the front-end of the application.

I separate the back-end functionalities because whenever we decide to do Headless WordPress in future we can just disable the theme and WP REST API routes will still be available.

I use React + Redux for the front-end because I think it is necessary for an application to have such stack that is robust, simple, reliable and maintainable.

## Technology used

- WordPress
- Composer
- Node
- NPM
- React + Redux
- Webpack
- WP REST API
- PHPCS
- PHPUNIT
- Travis

## Composer dependencies

Here are the list of composer packages I used:

| Dependency               | Use                                     |
| ------------------------ | --------------------------------------- |
| **vlucas/phpdotenv**     | For reading `.env` files.               |
| **johnpbloch/wordpress** | For the installation of WordPress core. |
| **wp-api/basic-auth**    | For authenticating request to the API.  |

## Source code path

Direct directories to source code:

| Path                    | For                                          |
| ----------------------- | -------------------------------------------- |
| `/content/plugins/rwc-backend`  | Plugin for all the back-end functionalities. |
| `/content/themes/rwc-frontend` | React based theme for front-end.             |

## Basic installation

After installing all of the requirements run `composer install` in the root folder of the project and wait until it finished downloading all the project dependencies. 

Next step is to edit the generated `.env` configuration file and enter your environment settings and credentials. Make sure you define the right `WP_HOME` for your project.

Setup your database and activate the `React WordPress CRUD Back-end` plugin.

## To-do list

- [x] Initial setup for React front-end and WordPress back-end
- [x] Develop a plugin for WP REST API routes and endpoints
- [x] Develop a theme for the Create and Read part of the CRUD
- [x] Add style to the front-end and add validations to the form
- [x] Integrate automated test units
- [x] Deploy the application (Amazon Linux AWS EC2)
- [x] Explain the solution in README.md file
