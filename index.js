//import json-server library
const jsonServer = require('json-server');

//create server using create function

const e_learnServer =jsonServer.create();

//create path for db.json file

const router =jsonServer.router('db.json');

//CREATE    middleware to convert js into json

const middleware =jsonServer.defaults();

//connect
e_learnServer.use(middleware);
e_learnServer.use(router);

//set up port for the server

const port=4000 || process.env.PORT

//run the server

e_learnServer.listen(port,()=>{
    console.log('mediaPlayer server running Sucessfully');
})