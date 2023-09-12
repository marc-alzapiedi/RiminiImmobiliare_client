# Real-estate website replication
A full-stack website made with React.js and ElephantSQL as a PostgreSQL database. 

## Table of Contents
- [Real-estate website replication](#real-estate-website-replication)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [UI Screenshots](#ui-screenshots)

## Background
This is a full-stack project that is supposed to be a replication of [Immobiliare.it](https://www.immobiliare.it/?utm_source=bing&utm_medium=cpc&utm_campaign=search%7Cgeneric%7Csale%7Cit%7Call%7Cit&utm_term=agenzia%20immobiliare&utm_content=generic%7Cagencies%7Csale%7Cnomunicipality%7Cnozone%7Cnofilter%7Cit%7Call%7Cit%7Cstandard).  The idea was  to replicate the site with a client and server where a user can principally:

- Make an http GET request to view a list of announcements and filter the results of different types of property listings, and real-estate agencies available in the searched area.

- Make an http POST request to provide the necessary information to sell property and post announcements, see how much a property would sell for, and save announcements, searches, and send messages to sellers.

Seeded data has been created in the database that resembles default listings that any user can search for by searching for any city in the province of Rimini.

## Technologies
Project is made with:
- React.js
- ElephantSQL

## Setup
To run this project
1. Fork and clone the repository.
2. Run ```npm install``` to install the dependencies.
3. Run ```npm start``` to start the live react app.
4. Note that the backend server must be run first which can be found [here](https://github.com/marc-alzapiedi/fullstack_final_project_server). Follow the instructions to run the server.

## UI Screenshots
Note that this project is still under development and is subject to change.
![Main page](<Screenshot 2023-09-12 152221.png>)

![Main page with dropwdowns](<Screenshot 2023-09-12 152531.png>)

![Searchpage](<Screenshot 2023-09-12 152654.png>)
