import express from 'express';
import db from './db/db';

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/v1/products', (req, res, next) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        productsr: db
    })
});

const PORT = 5000;


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});