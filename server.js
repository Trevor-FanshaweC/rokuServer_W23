const express = require('express');
const server = express();
const port = process.env.PORT || 5050;

// this route manages user data
server.use('/ums', require('./routes/api'));

server.listen(port, () => {
    console.log(`server is running on ${port}`);
})