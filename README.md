# Full-stack web app with PostGraphile and React

This repo is for reference to blog post: Building Full-stack web app with PostGraphile and React

Here's the details about technologies we will be using to build our architecture.

- Database: PostgreSQL
- Server: Node, ExpressJS and PostGraphile
- Client: React+TypeScript, GraphQL, Apollo-Client
- Schema handling: Knex Migrations.

## Server

Install postgreSQL and update configuration under following file `.env`

Edit and save `sample.env` as `.env` and update config as per your requirements.

Run the following command in `server` to install requied packages:

`npm install`



### For schema migrations:

Here is the folder structure for that: 
- Server
  - db
    - migrations
    - seeds

To update your tables as per schema migrations files run the following command:

`npx knex migrate:latest`

To update your table with static data/seeds run the following command:

`npx knex seed:run`



### Run Server:

To get our server running run any of the following command:

- `yarn start` or `npm run start` : Start our server.
- `yarn watch` or `npm run watch` : Watch mode for server.


Hit following URL `http://localhost:8080/graphql` to see generated graphql by `postgraphile`


## Client

### GraphQL codegen:
To generate graphql querries and mutations hooks based run the following command:

`yarn codegen`


To have hook based queries and mutations, add them to respected folders and run codegen command as mentioned above.

Here's the folder structute for queries and mutations.

- src
    - Components
    - graphql
        - query
        - mutations
        


### Run client:
Run the following command in `client` to install requied packages:

`yarn` or `npm install`


To start our client run the following command:


`yarn start`

You client will run on `http://localhost:3000`

        
