# seedlyClone

This is a clone of Seedly's basic questions page on their website.

Currently it works by using React-Redux with a mock JSON-Server. To run the application, you should have

1. React
2. Redux
3. React-Redux
4. Redux-Thunk

```
//This runs the initial application which will run on port 3000 by default
npm start
```

# Starting the server

To run the server, make sure you are in the root directory with the file db.json present within it.

```
//The server first requires a global install to work
npm install -g json-server
// This then starts the server which will run on a separate port 
json-server --watch db.json

```

Currently the server is set to return a list of posts as outlined in db.json. This is then used to populate the application when redux recieves the data and passes it as a prop to our react application.

# Troubleshooting

In the event that the server is not able to work, try starting the server first. This allows it to run on Port 3000. Next start up the react application on a separate Port. This should allow it to work.
