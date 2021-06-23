# AdCellerant Code Challenge - FE Repo

Frontend Repo: https://github.com/camaragon/adcellerant-skills-fe <br>
Backend Repo: https://github.com/camaragon/adcellerant-skills-be

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Table Screenshot](https://user-images.githubusercontent.com/69489633/123150972-33523680-d420-11eb-9c77-be5bb22d00fc.png)


## Overview

### Introduction

This challenge is full-stack, from database to API to HTML. Try not to focus all of your effort in a single area; we expect to see at least some backend and frontend. We will discuss your work during the on-site interview.
You have 5 days – including weekends – to complete as much as you can. Early submissions are welcome if you finish quickly, or you might also prefer to add extra features or tests.

### Summary

Imagine you run advertisements for various products sold by your imaginary company. Your team is very interested in gathering advertising analytics to gauge product interest in the marketplace.

### Problem Statement

**Backend**: We’ve provided sample data to imitate advertising analytic data. Your application needs to serve the provided data via API. It’s up to you how to store and serve the data. Think about how a frontend application would want to consume the data. Many enterprise APIs support filtering and sorting, for instance. Feel free to add to the provided data if you wish.

**Frontend**: Present an HTML web interface to visualize the data. There is intentionally a large range of interpretation here. You could render a table, charts, both, or neither. Use your imagination. Think about usability. How would users filter or sort? Users may want to see the number of impressions or clicks per product, per source, for a date range, or some combination of it all.

### Solution Considerations

- Data should be stored in a database. We use PostgreSQL, but use what makes you comfortable.
- UI presentation (frameworks and libraries) is mostly up to you, but please use HTML. Some of our tech are React, Node, TypeScript, and GraphQL, but use what makes you comfortable.
- It is highly preferred that code submissions be Docker ready.
- Keep in mind that every candidate does the code test, so think of ways to make yourself
stand out from the crowd!
- You have a limited amount of time. Beware of going down rabbit holes.

---

![Chart Screenshot](https://user-images.githubusercontent.com/69489633/123151558-cf7c3d80-d420-11eb-99bb-01758d8623e0.png)


### Technologies Used

* JavaScript
* React
* CSS
* Chart.js
* Node.js
* Express.js
* Knex.js
* PostgreSQL

### Setup

This codebase is Docker ready. The PostgreSQL database will need a container `docker run --rm -it --name <desired-container-name> -e POSTGRES_PASSWORD=password -p 1234:1234 postgres`. To migrate and seed the database run `npx knex migrate:latest --knexfile knexfile.js` and `npx knex seed:run`.
<br>
<br>
To run the backend use: `docker run -p 3002:3002 -d <container-name>`
<br>
<br>
To run the frontend use:
```
$ docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
<container-name>
```
![Table Screenshot](https://user-images.githubusercontent.com/69489633/123151232-7dd3b300-d420-11eb-9207-b7d1244b0ac8.png)
![Chart Screenshot](https://user-images.githubusercontent.com/69489633/123151329-90e68300-d420-11eb-8417-67c731759bbf.png)
