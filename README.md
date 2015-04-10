Node Simple Server
===
>Node simple server is just a basic Hapi JS server with a few nice 
>methods that can be used to mock apis, or serve a static project. 

#Dependencies
* Node
* npm

#Installation
Use a command prompt or terminal to navigate to the project root folder 
(where package.json is located) and run the command `npm install`

#Running the Server
Use a command prompt or terminal to navigate to the project root folder 
(where package.json is located) and run the command `npm start`

The prompt or terminal should tell you the hostname and port that is being 
listened. This hostname is interchangeable with any hostname configured to hit 
127.0.0.1 (localhost, etc).

The example path is `<host>:<port>/example`

#Adding a Simple File Route
Routes should not be added to the server file directly. Currently the example 
route is configured as a plugin which is composed on the server. Maintaining 
this approach will allow us to install specific routes, and let our server 
be independent of the routes it serves. 


`var filedataHandler = require("../util/filedataHandler");
 server.route({
            method : "GET",
            path : "/example",
            handler : filedataHandler("./data/example.json")
        });`