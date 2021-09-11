#Express Project
## Sequelize orm
https://sequelize.org/master/index.html

## bcrypt
https://www.npmjs.com/package/bcrypt

## dotenv
https://www.npmjs.com/package/dotenv

## Template engines ejs
https://www.npmjs.com/package/ejs

## jsonwebtoken
https://www.npmjs.com/package/jsonwebtoken

## express validator
https://www.npmjs.com/package/express-validator

## Installation
````
npm install
````

## Run 
````
npm run dev
````

## Creating the Model (and Migration)
````
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
````

## Run Migrations
````
npx sequelize-cli db:migrate
````

## Undoing Migrations
````
npx sequelize-cli db:migrate:undo
````
or
````
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
````

## Creating the Seed
````
npx sequelize-cli seed:generate --name demo-user
````

## Running Seeds
````
npx sequelize-cli db:seed:all
````

## Undoing Seeds
- If you wish to undo the most recent seed:
````
npx sequelize-cli db:seed:undo
````

- If you wish to undo a specific seed:
````
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
````

- If you wish to undo all seeds:
````
npx sequelize-cli db:seed:undo:all
````

