![brand](https://github.com/eclair-29/mernstack-boilerplate/blob/master/brand.jpg)

#### Quickstart Guide

Before doing this procedure, I assume that you clone this repository...

1. Run `npm install` to install dependecies for server side, then
2. Run `npm run client install` to install dependencies for the client side (running this script cause issues, to fix this, go to the `./client` directory and run `npm install` there), then
3. Run `npm run dev` to run the client & server with concurrently. and **Congratulations!!** You run your own mern stack app.

#### Scripts

| Script           | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| `dev`            | run the client & server with concurrently                                              |
| `server`         | run the application's server side (express) only                                       |
| `client-install` | [has issues at this moment][required to run] install all dependencies for react client |
| `client`         | run the application's client side (create-react-app) only                              |

#### MongoDB Configuration

Replace the mongodb connection string at `configs/keys.js`with your own db connection string

```javascript
mongodbURI: "<Connection String>",
secretOrKey: "<Secret Key>"
```

If you are kind and have a time to Fork this, then please do. Thank you!!

:relaxed:
