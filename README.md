### Sushi Hut
=========
A food ordering pick-up app for a single restaurant. 
Built as a group midterm project using AJAX, Node and Express. 

## Screenshots

**Main Page**
!["Screenshot of the main page"](https://github.com/palmswill/LHL-Midterm/blob/front/back/db_merge_V2/public/images/homepage.png?raw=true)


**Basket**
!["Screenshot of the main page with items in the Basket"](https://github.com/palmswill/LHL-Midterm/blob/front/back/db_merge_V2/public/images/basket_full.png?raw=true)


**Customer Confirmation Page**
!["Screenshot of Customer Confirmation Page"](https://github.com/palmswill/LHL-Midterm/blob/front/back/db_merge_V2/public/images/order_confirmation.png?raw=true)


**Customer Order Summary**
!["Screenshot of Customer Order Complete"](https://github.com/palmswill/LHL-Midterm/blob/front/back/db_merge_V2/public/images/ordersummary.png?raw=true)


**Restaurant Order Text**
!["Screenshot of Restaurant Order Text"](https://github.com/palmswill/LHL-Midterm/blob/front/back/db_merge_V2/public/images/restaurant_text.png?raw=true)


**Customer Text Confirmation**
!["Screenshot of Customer Time Update"]()




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
