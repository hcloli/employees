// server.js

// set up
var express = require('express')
        , app = express();
                
// configuration
app.use(express.static(__dirname + '/www'));                  // set the static files location

// routes
require('./routes.js')(app);

// listen (start app with node server.js)
app.listen(8080);
console.log("App listening on port 8080");