# Project Title
Roseworths Plant Subscription Service

## Table of Contents:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [License](#license)

## About The App
Roseworths Plant Subscription Service is an app that is used by staff of Roseworths to update the catalogue of plants that customers can buy. The aim is to manage the database of plants and repsective gardeners. The end goal is to populate a front end UI for customers to order a plant on subscription with the data loaded into this app.
It is important to load the system with accurate data, as it will eventually be used to drive revenue for the business.

## Technologies
I used the following technologies as the base infrastructure for the app:
`html`, 
`css`, 
`javascript`, 
`nodejs`, https://nodejs.org/en/ 
`express`, https://expressjs.com/
`react`,  https://reactjs.org/
`mysql` as a database. https://www.mysql.com/
I have used the following packages and dependencies for the Client build:
"axios": "^0.27.2", https://www.npmjs.com/package/axios
"react-bootstrap": "^2.4.0", https://react-bootstrap.github.io/
"react-dom": "^18.1.0", https://reactjs.org/docs/react-dom.html
"react-icons": "^4.4.0", https://react-icons.github.io/react-icons/
"react-router-dom": "^6.3.0", https://reactrouter.com/
"react-scripts": "5.0.1", https://www.npmjs.com/package/react-scripts
"react-toastify": "^9.0.3", https://www.npmjs.com/package/react-toastify
"styled-components": "^5.3.5" https://styled-components.com/

I have used the follwoing packages and dependencies for the Server build:
"body-parser": "^1.20.0", https://www.npmjs.com/package/body-parser
"cors": "^2.8.5", https://www.npmjs.com/package/cors 
"express": "^4.18.1", https://expressjs.com/
"mysql2": "^2.3.3", https://www.npmjs.com/package/mysql2
"nodemon": "^2.0.16" https://www.npmjs.com/package/nodemon

## Setup
- download or clone the repository
- navigate into the Server directory `CD server`
- run `npm run server`
- wait to see that the serve is listening on Port8080
- navigate into the Client directory `CD client`
- run `npm start`
- Open two tabs in the browser
    - tab a) load the url http://localhost:8080/ here you will see if the express server is working on your local environment.
    - tab b) load the url http://localhost:3000/ here you will see if the front end interface is working. This is development mode, and any changes you make will be seen in real time in the UI.

## Approach
I have organised the Client folder following React best practice of Public and Source (src) folders. Within the src folder you can find a Pages folder that holds all front end componenets. There is also a Components folder that holds global components such as Header(nav) and Themes.

You will see that Add and Edit (create and update) functions have been built into the one page to reduce the size of the app.

## Status
Roseworths plant subscription service is still in progress. The version you are viewing is a protoype to test the concept before deisgn and build.
There is currently no login required as this is for internal distribution only. 

## License
MIT licenses
react https://github.com/facebook/react/blob/main/LICENSE
bootstrap https://github.com/twbs/bootstrap/blob/v4.0.0/LICENSE
