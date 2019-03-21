const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send([
    { name: '1' ,
    fullName: '2'},
    { name: '1' ,
    fullName: '2'},
    { name: '1' ,
    fullName: '2'},
    ]);
});

app.listen(1337, () => {
    console.log('server started');
});