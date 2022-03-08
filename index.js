const server = require('./api/server');

const port = 9100;

// START YOUR SERVER HERE
server.listen(port,(l=> {
    console.log(`listening on port #`)
}))