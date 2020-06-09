/** 
Loading express module, which returns a function 
*/ 
const express = require('express');

/** 
 The path module provides us with utilities for working with file and directory paths. 
 */
const path = require('path');

/** Calling the function which returns an object of type Express
* By conveition we call that object as 'app'
*/
const app = express();

/**
 * Defining the port which will be used by server to listen for requests
 */
const port = 3000;

/**
Listen for get request on root url. eg. http://localhost:3000 
*/
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/home.html')));

//app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/blogContract.js')));

/**
Start server & listen on port 3000.
*/
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


