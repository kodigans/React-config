const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(1337, () => {
    console.log('server started');
});