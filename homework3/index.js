const express = require('express');
const AWS = require('aws-sdk');
const endPoint = require('./routes/api');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use('/app', endPoint);

AWS.config.region= 'ap-soutn-1';
const docClient = new AWS.DynamoDB.DocumentClient();

server.listen(8000, () => {
    console.log('Listening on port 8080')
})