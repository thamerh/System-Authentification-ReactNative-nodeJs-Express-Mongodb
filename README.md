# react-native-authentication


The main goal of this project is to show you how to register and authenticate a user and access protected resources from a React-Native app to a NodeJS server.

### Installation

If you don't have React-Native installed on your computer, run the following:
```
npm install -g react-native-cli
```

Go in the `Front-End` directory, and run the following:

```
npm install
```

### Run

```npm start
```
NB Android:

You will need to follow a few steps to run the client:

- Open the file `Front-end/src/config.js`
- Modify `localhost` with the IP address (if not work Modify Node ipconfig)of your machine (usually something like 192.168.0.10)

## Server

### Installation


If you don't have SailsJS installed on your computer, run the following:
```
npm install -g sails
```

Go in the `Back-End` directory, then run the following:

```
npm install
```

### Run

Run the following in the terminal:

```
npm start
```

This will create a server listening on port 8000, you can access it from http://localhost:8000/. The server needs to run at all time when you use the client.

### Entry-points:


The non-protected entry-points allow authentication and registration:

- `POST /create-user`: Create a new user
- `POST /sign-in`: Authenticate and retrieve the access and refresh tokens in exchange of email/password
- `POST /sign-out`: Log out, revoke access by destroying the user tokens

### Add .env
JWT_SECRET= personnel jwt secret 
MONGO_URI= mongodb+srv://Exemple:Password@cluster0.7dty31j.mongodb.net/?retryWrites=true&w=majority

# Technologies
- React Native
- Node js
- Express js
- jsonwebtoken
- mongodb

# secreen shot

### Login
![](https://github.com/thamerh/System-Authentification-ReactNative-nodeJs-Express-Mongodb/blob/main/SecreenShot/login.png)
### Sing Up
![](https://github.com/thamerh/System-Authentification-ReactNative-nodeJs-Express-Mongodb/blob/main/SecreenShot/register.png)
### home
![](https://github.com/thamerh/System-Authentification-ReactNative-nodeJs-Express-Mongodb/blob/main/SecreenShot/home.png)

## Made By

- [@thamerh](https://github.com/thamerh)

