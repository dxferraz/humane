# Humane

An open source humanitarian application

## Getting started

```sh
cp .env.example .env
# fill env variables in `.env` file
npm ci
npm start
# http://localhost:3000/api
```

## How it works

Application is written using NestJS, Prisma and GraphQL, but since [backend API specification](<(https://github.com/gothinkster/realworld/tree/master/api)>) requires REST, graphql endpoint wrapped by REST API. It is the facade and work as microservice which sends all requests
to graphql api.

### Project Structure

-   `src` - Main application source code
-   `src/api` - REST API wrapper under main application
-   `src/app.environment.ts` - Application config file
-   `prisma` - DB toolkit to query, migrate and model your database
-   `@generated` - Generated code

## Run realword API end-to-end tests

```sh
1: npm run start:dev
2: npm run api:spec
```

## Resources

-   [Backend API spec](https://github.com/gothinkster/realworld/tree/master/api)
-   [Postman collection](https://github.com/gothinkster/realworld/blob/master/api/Conduit.postman_collection.json) that you can use to test your API endpoints as you build your app.

## Scripts

```
autocannon -m POST -i body.json -H "Content-Type: application/json" http://localhost:3000/graphql
```
