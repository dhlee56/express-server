require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
let corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(express.json());
app.use(cors(corsOptions));
//app.options('*', cors())
app.get('/', (req, res) => {
    // res.json({
    //     success: true,
    // });
    console.log(req.method)
    res.send({"message":"Hello World"})
});
const messages = [
    "Hello World",
    "Hello, coroutines!",
    "My favorite feature",
    "Async made easy",
    "Coroutines by example",
    "Check out the Advanced Coroutines codelab next!"
]
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
app.get('/next_title', (req, res) => {
    // res.json({
    //     success: true,
    // });
    const message = messages[getRandomInt(messages.length)];
    console.log('next_title')
    res.json(message)
});
app.get('/users', (req,res) => {
    console.log(req.method)
    res.json([
        {
            id: 1,
            name: 'dong',
            username: 'dong ho lee',
            email: 'dhlee@ee.knu.ac.kr',
            phone: "010 9366 7815"

        },
        {
            id: 2,
            name: 'kim',
            username: 'nam cheol kim',
            email: 'nckim@ee.knu.ac.kr',
            phone: "010 1234 4567"

        }
    ])
})

app.post('/', (req, res) => {
    console.log(req.method)
    res.send({"message":`Post World ${req.body.user.name}`})
    console.log(req.body)
    console.log(req.query)
})
app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});