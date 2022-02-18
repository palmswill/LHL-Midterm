### Sushi Hut
=========
A food ordering pick-up app for a single restaurant. 
Built as a group midterm project using AJAX, Node and Express. 

## Screenshots

**Main Page**
!["Screenshot of the main page"]()


**Customer Confirmation Page**
!["Screenshot of Customer Confirmation Page"]()


**Customer Time Update**
!["Screenshot of Customer Time Update"]()


**Customer Order Complete**
!["Screenshot of Customer Order Complete"]()


**Restaurant Order Text**
!["Screenshot of Restaurant Order Text"]()


**Customer Order Confirmation Text**
!["Screenshot of Customer Order Confirmation Text"]()


**Customer Order Completed Text**
!["Screenshot of Customer Order Completed Text"]()


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Twilio
- Body-parser
- Express
- JQuery
- Ejs
- Node-sass
- Dotenv
